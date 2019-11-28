<script>
  import { getContext } from 'svelte'

  const { value } = getContext("MY-KEY")
</script>

In descendant: {$value}
