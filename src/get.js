/**
 * Gets a bit (right-shift method).
 * @param {number} x an int32
 * @param {number} i bit index
 * @returns {number}
 */
function get(x, i) {
  return (x>>>i) & 1;
}
module.exports = get;
