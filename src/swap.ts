import ones from "./_ones";

/**
 * Swap bit sequences.
 * @param x an int32
 * @param i first bit index
 * @param j second bit index
 * @param w bit width (1)
 */
function swap(x: number, i: number, j: number, w: number=1): number {
  var t = ((x>>>i)^(x>>>j)) & ones(w);
  return x ^ ((t<<i)|(t<<j));
}
export default swap;
