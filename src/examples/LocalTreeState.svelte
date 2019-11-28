<script>
  import {setContext} from 'svelte'
  import {writable} from 'svelte/store'
  import Descendant from './Descendant.svelte'

  // "key" can be any value
  const key = "MY-KEY"

  const value = writable(0)

  // put stuff in context, so child components can access it
  setContext(key, {value})

  function increment() {
    value.update(n => n + 1)
  }
</script>

In root: {$value} <button on:click|preventDefault={increment}>++</button>

<p><Descendant/></p>
<p><Descendant/></p>
