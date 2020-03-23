/**
 * Sets a bit (left-shift method).
 * @param {number} x an int32
 * @param {number} i bit index
 * @param {number?} f bit value (1)
 * @returns {number}
 */
function set(x, i, f=1) {
  return (x & ~(1<<i)) | (f<<i);
}
module.exports = set;
