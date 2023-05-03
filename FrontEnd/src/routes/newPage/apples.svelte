<script>
  // @ts-nocheck
  import { writable } from 'svelte/store';
  import apple from '$lib/images/apple.svg';
  export let appleID;
  export let posTop;
  export let posLeft;
  export let isClicked;
  export let isVisible = writable(false);

  let clickApple = () => {
    console.log(`clicked ${appleID}`);
  }

</script>

<!-- visibility: ${isVisible ? 'visible' : 'hidden'} -->
<a
  on:click={clickApple}
  style={`position: absolute; top: ${posTop}; left: ${posLeft};visibility: ${isVisible ? 'visible' : 'hidden'} `
}
>

  <img src={apple} alt="apple" class="w-[10vw] lg:w-[7vw] hover:w-[8vw]" />
</a>