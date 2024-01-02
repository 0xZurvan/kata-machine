import LinkedList from '@code/DoublyLinkedList'
import { test_list } from './ListTest'

it('doublyLinkedList', () => {
  const list = new LinkedList<number>()
  test_list(list)
})
