interface Node<T> {
  value: T
  prev?: Node<T>
  next?: Node<T>
}

export default class DoublyLinkedList<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.length = 0
    this.head = this.tail = undefined
  }

  prepend(item: T): void {
    ++this.length
    const node: Node<T> = { value: item }

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
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

    if (!this.head) {
      this.head = this.tail = node
      return
    }

    let curr = this.head
    for (let i = 0; i < idx && curr && curr.next; ++i)
      curr = curr.next

    node.next = curr
    node.prev = curr.prev

    const prev = curr.prev
    if (prev) {
      prev.next = node
      curr.prev = node
    }
  }

  append(item: T): void {
    ++this.length
    const node: Node<T> = { value: item }

    if (!this.tail) {
      this.tail = this.head = node
      return
    }

    node.next = this.tail
    this.tail.prev = node
    this.tail = node
  }

  remove(item: T): T | undefined {
    if (!this.head)
      return undefined

    let curr: Node<T> = this.head
    for (let i = 0; i < this.length && curr && curr.next; ++i) {
      if (curr.value === item)
        break
      curr = curr.next
    }

    if (!curr)
      return undefined

    --this.length
    const prev = curr.prev
    if (prev && curr.next) {
      prev.next = curr.next
      curr.next.prev = prev
      curr.next = undefined
      curr.prev = undefined
    }

    if(this.length === 0)
      this.head = this.tail = undefined

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

    let curr = this.head
    for (let i = 0; i < idx && curr; ++i)
      curr = curr.next

    if (!curr)
      return undefined

    --this.length
    const prev = curr.prev
    if (prev && curr.next) {
      prev.next = curr.next
      curr.next.prev = prev
      curr.next = undefined
      curr.prev = undefined
    }

    if(this.length === 0)
      this.head = this.tail = undefined

    return curr.value
  }
}
