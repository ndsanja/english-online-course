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
    const response = await octokit.repos.getContent({
      owner, // Misalnya: "username-anda"
      repo, // Misalnya: "nama-repo"
      path, // Misalnya: "content/artikel.md"
    });

    // @ts-ignore
    const content = Buffer.from(response.data.content, "base64").toString(
      "utf-8"
    );
    // @ts-ignore
    const sha = response.data.sha;

    return { content, sha };
  } catch (error) {
    console.error("Error fetching from GitHub:", error);
    return { content: "Content not found", sha: "" };
  }
}
