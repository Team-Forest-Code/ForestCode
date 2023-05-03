<script lang="ts">
  import CodeSection from "./codeSection.svelte";
  import EditSection from "./editSection.svelte";

  let components: any[] = [];

  let addCode = () => {
    components = [...components, {id:components.length, component: CodeSection}]
  };

  let addNote = () => {
    components = [...components, {id:components.length, component: EditSection}]
  };

  function removeComponent(componentId) {
    components = components.filter(component => component.id !== componentId);
  }

</script>

<section class = "border w-[100vw] p-[20px]">
  <div class = "flex justify-around">
    <button class = "border" on:click={addCode}>Add Python Code</button>
    <button class = "border" on:click={addNote}>Add Text</button>
  </div>
  {#each components as component}
  <div>
    <button on:click={() => removeComponent(component.id)}>Remove</button>
    <svelte:component this={component.component} />
  </div>
{/each}


  <!-- <CodeSection />
  <EditSection /> -->
</section>
