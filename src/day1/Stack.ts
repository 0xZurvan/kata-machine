interface Node<T> {
  value: T
  next?: Node<T>
}
export default class Stack<T> {
  public length: number
  private head?: Node<T>

  constructor() {
    this.length = 0
    this.head = undefined
  }

  push(item: T): void {
    ++this.length
    const node: Node<T> = { value: item }

    if (!this.head)
      this.head = node

    node.next = this.head
    this.head = node
  }

  pop(): T | undefined {
    if (!this.head)
      return undefined

    --this.length
    const head = this.head as Node<T>
    this.head = head.next

    if (this.length === 0)
      this.head = undefined

    head.next = undefined
    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
