<script>
  import {onMount} from 'svelte'
  import valueStore, { increment } from './store'

  let value;

  const unsubscribe = valueStore.subscribe(new_value => {
    value = new_value
  })

  onMount(() => unsubscribe)
</script>

In Peer A: {value} <button on:click|preventDefault={increment}>++</button>
