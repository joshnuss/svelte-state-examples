<script>
  import LocalPrivateState from './examples/LocalPrivateState.svelte'
  import LocalPublicState from './examples/LocalPublicState.svelte'
  import LocalTreeState from './examples/LocalTreeState.svelte'
  import PeerA from './examples/LocalSharedState/PeerA.svelte'
  import PeerB from './examples/LocalSharedState/PeerB.svelte'

  let boundValue = 0;
</script>

<main>
  <h1>Svelte.js state management options</h1>
  <section>
    <h2>Local Private State</h2>
    <p>Only the component has access.<br>Lost once the component is removed from the DOM.</p>
    <LocalPrivateState/>
  </section>

  <section>
    <h2>Local Parent-Accessable State</h2>
    <p>The component and the component's owner have access.<br>Lost once the owner is removed from the DOM. <br>One-way binding.</p>
    <LocalPublicState value={42}/>
  </section>

  <section>
    <h2>Local Bound State</h2>
    <p>The component and the component's owner have access.<br>Lost once the owner is removed from the DOM. <br>Two-way binding.</p>
    <LocalPublicState bind:value={boundValue}/>
    <p>It's also {boundValue} in the parent.</p>
  </section>

  <section>
    <h2>Local Tree State</h2>
    <p>The component and all it's descendants have access.<br>Lost once the root component is removed from the DOM.</p>
    <LocalTreeState/>
  </section>

  <section>
    <h2>Shared State</h2>
    <p>Any component can have access.<br>Lost once the tab is closed.</p>
    <div><PeerA/></div>
    <div><PeerB/></div>
  </section>
</main>
