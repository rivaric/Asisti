/* eslint-disable */
// @ts-nocheck
export function createDeque(maxLength = 80) {
  return {
    deque: [],
    max: -1,
    last: null,
    push: function (item) {
      this.deque.push(item)
      this.last = item

      if (this.deque.length > maxLength) {
        const removedItem = this.deque.shift()
        if (removedItem === this.max) {
          this.max = Math.max(...this.deque)
        }
      } else {
        this.max = Math.max(this.max, item)
      }
    },
    clear: function () {
      this.deque = []
      this.last = null
      this.max = -1
    },
    toArray: function () {
      return this.deque.slice()
    },
  }
}
