<script>
  import Prism from "prismjs";

  import tree from "$lib/images/tree.svg";
  import apple from "$lib/images/apple.svg";
  import bench from "$lib/images/bench.svg";

  export let data;

  const {
    data: { files },
  } = data;
  const content = Object.values(files)[0].content;

  // TODO: tell which note this is
  let isShowing = false;

  function handleClick() {
    isShowing = !isShowing;
  }
</script>

<svelte:head>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-dark.min.css"
    rel="stylesheet"
  />
</svelte:head>
<section class="relative h-[100vh] my-10">
  {#if isShowing}
    <pre>
      <!-- TODO: dynamic language -->
      {@html Prism.highlight(content, Prism.languages.js, "js")}
    </pre>
    <!-- <pre>
      <code class="language-python">{content}</code>
    </pre> -->
  {/if}
  <img src={tree} alt="tree img" class="w-[100vw] h-[100vh]" />
  <!-- ROW 1 -->
  <button on:click={handleClick}>
    <img
      src={apple}
      alt="apple"
      class="absolute w-[7vw] top-[0vh] left-[46vw] hover:w-[8vw]"
    />
  </button>

  <!-- ROW 2 -->
  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[7vh] left-[50vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[7vh] left-[42vw] hover:w-[8vw]"
  />

  <!-- ROW 3 -->
  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[15vh] left-[55vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[15vh] left-[46vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[15vh] left-[38vw] hover:w-[8vw]"
  />

  <!-- ROW 4 -->

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[23vh] left-[51vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[23vh] left-[42vw] hover:w-[8vw]"
  />

  <!-- ROW 5-->

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[32vh] left-[55vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[32vh] left-[47vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[32vh] left-[38vw] hover:w-[8vw]"
  />

  <!-- ROW 6-->

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[40vh] left-[51vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[40vh] left-[42vw] hover:w-[8vw]"
  />

  <!-- ROW 7-->

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[48vh] left-[55vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[48vh] left-[47vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] top-[48vh] left-[38vw] hover:w-[8vw]"
  />

  <img
    src={apple}
    alt="apple"
    class="absolute w-[7vw] bottom-[2vh] left-[38vw] hover:w-[8vw]"
  />

  <img
    src={bench}
    alt="bench"
    class="absolute w-[13vw] bottom-[2vh] left-[56vw]"
  />

  <div
    class="absolute  left-[25%] bottom-3 w-[50%] bg-orange-800  rounded-full h-[4vh]"
  >
    l
  </div>
</section>
