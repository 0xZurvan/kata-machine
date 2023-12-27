/* eslint-disable no-restricted-syntax */
import bubble_sort from '@code/BubbleSort'

it('bubble-sort', () => {
  const arr = [9, 3, 7, 4, 69, 420, 42]

  // eslint-disable-next-line no-debugger
  debugger
  bubble_sort(arr)
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420])
})
