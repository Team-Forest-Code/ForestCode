import { Octokit } from "octokit";
import { env } from "$env/dynamic/private";

export async function load() {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: env.TOKEN,
  });

  const response = await octokit.request("GET /gists", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response;
}
