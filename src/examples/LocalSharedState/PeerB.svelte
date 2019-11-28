<script>
  import { value, increment } from './store'
</script>

In Peer B: {$value} <button on:click|preventDefault={increment}>++</button>
