/**
 * Sign extends variable bit-width integer.
 * @param {number} x variable bit-width integer
 * @param {number} n bit width
 * @returns {number} int32
 */
function signExtend(x, n) {
  n = 32-n;
  return (x<<n)>>n;
}
module.exports = signExtend;
