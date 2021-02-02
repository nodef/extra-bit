/**
 * Swap bit sequences.
 * @param x an int32
 * @param i first bit index
 * @param j second bit index
 * @param n bit width (1)
 */
function swap(x: number, i: number, j: number, n: number=1): number {
  var t = ((x>>>i)^(x>>>j)) & ((1<<n)-1);
  return x ^ ((t<<i)|(t<<j));
}
export default swap;
