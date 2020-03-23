/**
 * Swaps bit sequences (xor method).
 * @param {number} x an int32
 * @param {number} i first bit index
 * @param {number} j second bit index
 * @param {number?} n bit width (1)
 * @returns {number}
 */
function swap(x, i, j, n=1) {
  var x = ((x>>>i)^(x>>>j)) & ((1<<n)-1);
  return x ^ ((x<<i)|(x<<j));
}
module.exports = swap;
