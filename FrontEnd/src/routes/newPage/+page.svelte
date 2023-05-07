<script>
  // @ts-nocheck

  import tree from "$lib/images/tree.svg";
  import apple from "$lib/images/apple.svg";
  import bench from "$lib/images/bench.svg";

  export let data;

  const ids = [];

  for (const gistData of data.data) {
    const { id } = gistData;
    ids.push(id);
  }

  console.log(ids);

  // TODO: tell which note this is
  let isShowing = false;

  function handleClick() {
    isShowing = !isShowing;
  }

  let count = 0;
  let addApples = () => {
    console.log(count);
    count++;
  };
</script>

<section
  class="relative  h-[100vh] w-[100vw]  my-10 flex justify-center items-center"
>
  <img
    src={tree}
    alt="tree"
    class="overflow-hidden absolute h-[100vh] w-[100vw] "
  />
  <!-- ROW 1 -->
  <button
    type="button"
    class={`absolute cursor-pointer left-[3vw] lg:left-[11vw] top-[20vh] border border-black w-[20vw] h-[10vh] rounded-lg `}
    on:click={addApples}
  >
    Create a New Note
  </button>
  {#each ids as id}
    <a href={`/paper?id=${id}`}>
      <img
        src={apple}
        alt="apple"
        class="absolute w-[10vw] top-[2vh] lg:w-[7vw] left-[44vw] lg:top-[0%] lg:left-[46%] hover:w-[8vw]"
      />
    </a>
  {/each}

  <img
    src={bench}
    alt="bench"
    class="absolute lg:w-[13vw] w-[15vw] bottom-[2vh] left-[56vw]"
  />

  <div
    class="absolute  left-[25%] bottom-3 w-[50%] bg-orange-800  rounded-full h-[4vh]"
  >
    l
  </div>
</section>
