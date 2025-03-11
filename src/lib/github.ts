interface MarkdownContent {
  content: string;
  sha: string;
}

export async function getMarkdownFromGitHub(
  owner: string,
  repo: string,
  path: string
): Promise<MarkdownContent> {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("GITHUB_TOKEN is not defined in environment variables");
  }

  try {
    console.log(`Fetching content from GitHub: ${owner}/${repo}/${path}`);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (response.status === 404) {
      console.error(`File not found: ${path}`);
      return {
        content:
          "# File Not Found\n\nThe requested file was not found in the repository.",
        sha: "",
      };
    }

    const content = Buffer.from(data.content, "base64").toString("utf-8");
    const sha = data.sha;

    return { content, sha };
  } catch (error: any) {
    console.error(`Error fetching from GitHub: ${error.message}`);
    if (error.message.includes("401")) {
      throw new Error("Unauthorized: Invalid or missing GitHub token");
    } else if (error.message.includes("404")) {
      return {
        content:
          "# File Not Found\n\nThe requested file was not found in the repository.",
        sha: "",
      };
    }
    throw new Error(`GitHub API error: ${error.message}`);
  }
}

export async function updateMarkdownToGitHub(
  owner: string,
  repo: string,
  path: string,
  content: string,
  sha?: string
): Promise<void> {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("GITHUB_TOKEN is not defined in environment variables");
  }

  try {
    let currentSha = sha;
    if (!currentSha || currentSha === "") {
      console.log(`SHA not provided or empty, fetching latest SHA for ${path}`);
      const { sha: latestSha } = await getMarkdownFromGitHub(owner, repo, path);
      currentSha = latestSha;
    }

    console.log(
      `Attempting to update: ${owner}/${repo}/${path} with SHA: ${currentSha}`
    );
    console.log(`Using token (first 5 chars): ${token.substring(0, 5)}...`); // Debugging token

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Update content via app",
        content: Buffer.from(content).toString("base64"),
        sha: currentSha,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Details: ${errorText}`
      );
    }

    const data = await response.json();
    console.log(`Update successful: ${JSON.stringify(data)}`);
  } catch (error: any) {
    console.error(`Error updating ${path}: ${error.message}`, error);
    if (error.message.includes("401")) {
      throw new Error("Unauthorized: Invalid or missing GitHub token");
    } else if (error.message.includes("404")) {
      throw new Error(
        "File not found on GitHub. It may have been deleted or moved."
      );
    } else if (error.message.includes("409")) {
      throw new Error(
        "Conflict: SHA does not match the current file version. Please refresh the content."
      );
    }
    throw new Error(`GitHub API error: ${error.message}`);
  }
}

// Tes lokal
async function test() {
  try {
    const { content, sha } = await getMarkdownFromGitHub(
      "ndsanja",
      "english-online-course",
      "content/noun.md"
    );
    console.log("Content:", content);
    console.log("SHA:", sha);

    await updateMarkdownToGitHub(
      "ndsanja",
      "english-online-course",
      "content/noun.md",
      "# Test Update\nManual update without Octokit",
      sha
    );
  } catch (error) {
    console.error("Test failed:", error);
  }
}

// test();
