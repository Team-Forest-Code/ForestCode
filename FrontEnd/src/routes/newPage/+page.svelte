<script>
    import { fade, scale } from "svelte/transition";
    let show = false;

    export let data;
    console.log(data); // TODO: remove console.log
  </script>
  
  <label>
    Toggle
    <input type="checkbox" bind:checked={show} />
  </label>
  <hr />
  {#if show}
    <h1 in:scale out:fade>My name is Forest Code</h1>
  {/if}
  