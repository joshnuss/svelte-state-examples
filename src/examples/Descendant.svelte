<script>
  import { getContext } from 'svelte'

  const { valueStore } = getContext("MY-KEY")

  let value;

  valueStore.subscribe(new_value => value = new_value)

</script>

In descendant: {value}
