<script>
  // exported, so it can be set or bound by parent
  export let value = 0

  function increment() {
    value = value + 1
  }
</script>

{value} <button on:click|preventDefault={increment}>++</button>
