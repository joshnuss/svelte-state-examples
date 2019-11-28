<script>
  import {setContext, onMount} from 'svelte'
  import {writable} from 'svelte/store'
  import Descendant from './Descendant.svelte'

  // "key" can be any value
  const key = "MY-KEY"

  const valueStore = writable(0)

  let value;

  const unsubscribe = valueStore.subscribe(new_value => value = new_value)

  onMount(() => unsubscribe)

  // put stuff in context, so child components can access it
  setContext(key, {valueStore})

  function increment() {
    valueStore.update(value => value + 1)
  }
</script>

In root: {value} <button on:click|preventDefault={increment}>++</button>

<p><Descendant/></p>
<p><Descendant/></p>
