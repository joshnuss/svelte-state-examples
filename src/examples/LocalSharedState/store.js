import {writable} from 'svelte/store'

export const value = writable(0)

export function increment() {
  value.update(n => n + 1)
}
