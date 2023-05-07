<script lang="ts">

  // @ts-nocheck

  import codeSectionP from "./codeSectionP.svelte";
  import EditSection from "./editSection.svelte";
  import CodeSectionJ from "./codeSectionJ.svelte";
  import CodeSectionJs from "./codeSectionJS.svelte";
  import CodeSectionC from "./codeSectionC.svelte";


  export let data;

  const {
    data: { files },
  } = data;

  const file = Object.values(files)[0];
  const content = file.content;
  const language = file.language;

  let components: any[] = [];
  let props;

  let addPCode = () => {
    components = [
      ...components,
      { id: components.length, component: codeSectionP },
    ];
    props = { content, language };
  };

  let addJCode = () => {
    components = [
      ...components,
      { id: components.length, component: CodeSectionJ },
    ];
    props = { content, language };
  };

  let addJSCode = () => {
    components = [
      ...components,
      { id: components.length, component: CodeSectionJs },
    ];
    props = { content, language };
  };

  let addCCode = () => {
    components = [
      ...components,
      { id: components.length, component: CodeSectionC },
    ];
    props = { content, language };
  };

  let addNote = () => {
    components = [
      ...components,
      { id: components.length, component: EditSection },
    ];
  };

  function removeComponent(componentId) {
    components = components.filter((component) => component.id !== componentId);
  }
</script>

<section class="border w-[100vw] p-[20px]">
  <div class="flex justify-around mb-[2%]">
    <button
      class="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
      on:click={addNote}>Add Text</button
    >
    <button
      class="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
      on:click={addPCode}>Add Python Code</button
    >
    <button
      class="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
      on:click={addJCode}>Add Java Code</button
    >
    <button
      class="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
      on:click={addJSCode}>Add Javascript Code</button
    >
    <button
      class="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
      on:click={addCCode}>Add C++ Code</button
    >
  </div>
  {#each components as component}
    <div>
      <button
        class="hover:text-red-600"
        on:click={() => removeComponent(component.id)}>Remove</button
      >
      <svelte:component this={component.component} {...props} />
    </div>
  {/each}


  <!-- <CodeSection />
  <EditSection /> -->
</section>
