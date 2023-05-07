<script lang="ts">
  // @ts-nocheck
  import { AceEditor } from "svelte-ace";

  import "brace/mode/python";
  import "brace/theme/chrome";

  let text = "";

  export let content;
  export let language;
</script>

<section class="my-2">
  <AceEditor
    on:selectionChange={(obj) => console.log(obj.detail)}
    on:paste={(obj) => console.log(obj.detail)}
    on:input={(obj) => console.log(obj.detail)}
    on:focus={() => console.log("focus")}
    on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
    on:cut={() => console.log("cut")}
    on:cursorChange={() => console.log("cursor change")}
    on:copy={() => console.log("copy")}
    on:init={(editor) => console.log(editor.detail)}
    on:commandKey={(obj) => console.log(obj.detail)}
    on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
    on:blur={() => console.log("blur")}
    width="97vw"
    height="25vh"
    lang="python"
    theme="chrome"
    value={language.toLowerCase() === "python" ? content : text}
  />
  <button
    class="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow"
  >
    Save
  </button>
</section>
