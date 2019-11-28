import {writable} from 'svelte/store'

const valueStore = writable(0)

export default valueStore

export function increment() {
  valueStore.update(value => value + 1)
}
