<script>
  import LocalPrivateState from './examples/LocalPrivateState.svelte'
  import LocalPublicState from './examples/LocalPublicState.svelte'
  import LocalTreeState from './examples/LocalTreeState.svelte'

  let boundValue = 0;
</script>

<main>
  <section>
    <h2>Local Private State</h2>
    <LocalPrivateState/>
  </section>

  <section>
    <h2>Local Public State</h2>
    <LocalPublicState value={42}/>
  </section>

  <section>
    <h2>Local Public State</h2>
    <LocalPublicState bind:value={boundValue}/>
    <p>It's {boundValue} in the parent.</p>
  </section>

  <section>
    <h2>Local Hierarchy State</h2>
    <LocalTreeState/>
  </section>
</main>
