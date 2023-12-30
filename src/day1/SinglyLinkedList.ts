interface Node<T> {
  value: T
  next?: Node<T>
}

export default class SinglyLinkedList<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
    this.tail = undefined
  }

  // Insert a node at the beginning
  prepend(item: T): void {
    ++this.length
    const node = { value: item } as Node<T>
    if (!this.head) {
      this.head = this.tail = node
      return
    }

    const curr = this.head
    this.head = node
    if (curr)
      this.head.next = curr
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length || idx < 0) {
      throw new Error('Index out of bounds')
    }
    else if (idx === this.length) {
      this.append(item)
      return
    }
    else if (idx === 0) {
      this.prepend(item)
      return
    }

    ++this.length
    const node: Node<T> = { value: item }

    let curr = this.head
    let prev: Node<T> | undefined

    for (let i = 0; i < idx - 1 && curr; ++i) {
      prev = curr
      curr = curr.next
    }

    if (prev) {
      prev.next = node
      node.next = curr
    }
  }

  // Insert a node at the end
  append(item: T): void {
    ++this.length
    const node = { value: item } as Node<T>
    if (!this.head) {
      this.tail = this.head = node
      return
    }

    const tail = this.tail
    if (tail) {
      tail.next = node
      this.tail = node
    }
  }

  remove(item: T): T | undefined {
    let curr = this.head

    for (let i = 0; i < this.length && curr; ++i) {
      if (curr.value === item)
        break
      curr = curr.next
    }

    if (!curr)
      return undefined

    --this.length
    if (this.length === 0) {
      const out = this.head?.value
      this.head = this.tail = undefined
      return out
    }

    let prev = this.head
    for (let i = 0; i < this.length - 1 && prev && prev.next; ++i) {
      if (prev.next.value === item)
        break

      prev = prev.next
    }

    if (prev) {
      prev.next = curr.next
      curr.next = undefined
    }

    return curr.value
  }

  get(idx: number): T | undefined {
    let curr = this.head
    for (let i = 0; i < idx && curr; ++i)
      curr = curr.next

    return curr?.value
  }

  removeAt(idx: number): T | undefined {
    if (idx > this.length || idx < 0)
      throw new Error('Index out of bounds')

    if (!this.head)
      return undefined

    --this.length

    let curr = this.head
    let prev: Node<T> | undefined

    if (idx === 0) {
      const out = this.head.value
      this.head = this.head.next
      if (this.length === 0)
        this.tail = undefined

      return out
    }

    for (let i = 0; i < idx && curr && curr.next; ++i) {
      prev = curr
      curr = curr.next
    }

    if (prev) {
      prev.next = curr.next
      if (idx === this.length - 1)
        this.tail = prev

      curr.next = undefined
    }

    return curr.value
  }
}
