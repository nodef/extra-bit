/**
 * Merges bits as per mask (xor method).
 * @param {number} x first int32
 * @param {number} y second int32
 * @param {number} m bit mask (0 => from x)
 * @returns {number}
 */
function merge(x, y, m) {
  return x ^ ((x^y) & m);
}
module.exports = merge;
