import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

interface MarkdownContent {
  content: string;
  sha: string;
}

export async function getMarkdownFromGitHub(
  owner: string,
  repo: string,
  path: string
): Promise<MarkdownContent> {
  try {
    console.log(`Fetching content from GitHub: ${owner}/${repo}/${path}`);
    const response = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    // @ts-ignore
    const content = Buffer.from(response.data.content, "base64").toString(
      "utf-8"
    );
    // @ts-ignore
    const sha = response.data.sha;

    return { content, sha };
  } catch (error: any) {
    console.error(`Error fetching from GitHub: ${error.message}`);
    if (error.status === 404) {
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
    const response = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: "Update content via app",
      content: Buffer.from(content).toString("base64"),
      sha: currentSha,
    });
    console.log(`Update successful: ${JSON.stringify(response.data)}`);
  } catch (error: any) {
    console.error(`Error updating ${path}: ${error.message}`, error);
    if (error.status === 404) {
      throw new Error(
        "File not found on GitHub. It may have been deleted or moved."
      );
    } else if (error.status === 409) {
      throw new Error(
        "Conflict: SHA does not match the current file version. Please refresh the content."
      );
    }
    throw new Error(`GitHub API error: ${error.message}`);
  }
}
