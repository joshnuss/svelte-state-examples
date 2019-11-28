<script>
  import { value, increment } from './store'
</script>

In Peer A: {$value} <button on:click|preventDefault={increment}>++</button>
