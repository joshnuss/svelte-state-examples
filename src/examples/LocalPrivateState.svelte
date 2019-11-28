<script>
  // not exported, so it's local to this component only
  let value = 0

  function increment() {
    value = value + 1
  }
</script>

{value} <button on:click|preventDefault={increment}>++</button>
