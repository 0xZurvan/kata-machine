export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0
  let high = haystack.length - 1

  for (let i = 0; i < haystack.length; ++i) {
    const mid = Math.floor((low + high) / 2)

    if (needle === haystack[mid])
      return true
    else if (needle > haystack[mid])
      low = mid + 1
    else
      high = mid
  }

  return false
}
