<script lang="ts">
  export let count: number = 0;
  export let isVisible: boolean = false;
</script>

<div class:visible={isVisible}>
  <h1>Counter</h1>
  <p>Current count: {count}</p>
</div>