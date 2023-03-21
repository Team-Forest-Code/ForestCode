<script>
  import { fade, scale } from "svelte/transition";
  let show = false;

  export let data;

  const { data: gists } = data;
  const urls = [];

  for (const gist of gists) {
    const { html_url: url } = gist;
    urls.push(url);
  }

  console.log(urls); // TODO: remove console.log
</script>

<label>
  Toggle
  <input type="checkbox" bind:checked={show} />
</label>
<hr />
{#if show}
  <h1 in:scale out:fade>My name is Forest Code</h1>
{/if}
