export default class ArrayList<T> {
  public length: number
  private items: T[]

  constructor() {
    this.length = 0
    this.items = []
  }

  prepend(item: T): void {
    ++this.length

    for (let i = this.length - 1; i > 0; --i)
      this.items[i] = this.items[i - 1]

    this.items[0] = item
  }

  insertAt(item: T, idx: number): void {

  }

  append(item: T): void {
    ++this.length
    this.items.push(item)
  }

  remove(item: T): T | undefined {
    let found = false

    for(let i = 0; i < this.length - 1; ++i) {
      if(this.items[i] === item)
        found = true

      if(found && i < this.length - 1)
        this.items[i] = this.items[i + 1]
    }

    if(found) {
      --this.length
      this.items[this.length] = undefined as T
      return item
    }

    return undefined
  }

  get(idx: number): T | undefined {
    return this.items[idx]
  }

  removeAt(idx: number): T | undefined {

  }
}
