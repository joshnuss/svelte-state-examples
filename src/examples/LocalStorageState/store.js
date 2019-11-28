import {writable} from 'svelte/store'

export function writeable(key, defaultValue) {
  // get inital value from localStorage
  const current = localStorage.getItem(key)
  const initial = current ? JSON.parse(current) : defaultValue
  const store = writable(initial)

  return {
    ...store,
    // hijack update() to write to localStorage
    update(cb) {
      return store.update(current => {
        const newValue = cb(current);

        localStorage.setItem(key, JSON.stringify(newValue))

        return newValue
      })
    }
  }
}
