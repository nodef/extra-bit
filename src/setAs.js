/**
 * Sets bits as per mask (not method).
 * @param {number} x an int32
 * @param {number} m bit mask
 * @param {number?} f bit value (1)
 * @returns {number}
 */
function setAs(x, m, f=1) {
  return (x & ~m) | (-f & m);
}
module.exports = setAs;
