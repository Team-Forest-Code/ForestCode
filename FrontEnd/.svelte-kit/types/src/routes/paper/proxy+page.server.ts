// @ts-nocheck
import { Octokit } from "octokit";
import { TOKEN } from "$env/static/private";

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ url }) {
  const octokit = new Octokit({
    auth: TOKEN,
  });

  const id = url.searchParams.get("id");

  const response = await octokit.request(`GET /gists/${id}`, {
    gist_id: "GIST_ID",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response;
}
