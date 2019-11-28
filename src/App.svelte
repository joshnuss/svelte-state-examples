<script>
  import LocalPrivateState from './examples/LocalPrivateState'
  import LocalPublicState from './examples/LocalPublicState'
  import LocalTreeState from './examples/LocalTreeState'
  import PeerA from './examples/LocalSharedState/PeerA'
  import PeerB from './examples/LocalSharedState/PeerB'
  import LocalStorageState from './examples/LocalStorageState'

  let boundValue = 0;
</script>

<main>
  <h1>Svelte.js state management options</h1>
  <section>
    <h2>Private State</h2>
    <p>Only the component has access.<br>Lost once the component is removed from the DOM.</p>
    <LocalPrivateState/>
  </section>

  <section>
    <h2>Parent-Accessable State</h2>
    <p>The component and the component's owner have access.<br>Lost once the owner is removed from the DOM. <br>One-way binding.</p>
    <LocalPublicState value={42}/>
  </section>

  <section>
    <h2>Bound State</h2>
    <p>The component and the component's owner have access.<br>Lost once the owner is removed from the DOM. <br>Two-way binding.</p>
    <LocalPublicState bind:value={boundValue}/>
    <p>It's also {boundValue} in the parent.</p>
  </section>

  <section>
    <h2>Component Tree State</h2>
    <p>The component and all it's descendants have access.<br>Lost once the root component is removed from the DOM.</p>
    <LocalTreeState/>
  </section>

  <section>
    <h2>Shared State</h2>
    <p>Any component can have access.<br>Lost once the tab is closed.</p>
    <div><PeerA/></div>
    <div><PeerB/></div>
  </section>

  <section>
    <h2>Local Storage</h2>
    <p>Any component can have access.<br>Persists even after you close the window/tab.</p>
    <LocalStorageState/>
  </section>
</main>
