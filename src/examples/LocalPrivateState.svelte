<script>
  let value = 0

  function increment() {
    value = value + 1
  }
</script>

{value} <button on:click|preventDefault={increment}>Inc</button>
