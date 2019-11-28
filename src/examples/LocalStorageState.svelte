<script>
  import { writeable } from './LocalStorageState/store'

  const value = writeable('myCounter', 0)

  function increment() {
    value.update(n => n + 1)
  }
</script>

{$value} <button on:click|preventDefault={increment}>++</button>
