<script lang="ts">
    import { AceEditor } from "svelte-ace";
    import "brace/mode/java";
    import "brace/theme/chrome";
    let text = "";

    export let content;
    export let language;

    console.log(content);

  </script>
  
  <section class = "my-2">
    <AceEditor
      on:selectionChange={(obj) => console.log(obj.detail)}
      on:paste={(obj) => console.log(obj.detail)}
      on:input={(obj) => console.log(obj.detail)}
      on:focus={() => console.log('focus')}
      on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
      on:cut={() => console.log('cut')}
      on:cursorChange={() => console.log('cursor change')}
      on:copy={() => console.log('copy')}
      on:init={(editor) => console.log(editor.detail)}
      on:commandKey={(obj) => console.log(obj.detail)}
      on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
      on:blur={() => console.log('blur')}
      width='97vw'
      height='25vh'
      lang="java"
      theme="chrome"

      value={language === "Java" ? content : text} />

  </section>
  