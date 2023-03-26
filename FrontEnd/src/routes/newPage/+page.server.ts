import { Octokit } from "octokit";
import { TOKEN } from "$env/static/private";

export async function load() {
  const octokit = new Octokit({
    auth: TOKEN,
  });
  const response = await octokit.request("GET /gists", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response;
}
