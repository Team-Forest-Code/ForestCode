import { Octokit } from "octokit";
import { TOKEN, ID } from "$env/static/private";

export async function load() {
  const octokit = new Octokit({
    auth: TOKEN,
  });
  // TODO: get gistId
  const response = await octokit.request(`GET /gists/${ID}`, {
    gist_id: "GIST_ID",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response;
}
