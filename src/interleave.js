/**
 * Interleaves bits of two int16s (binary magic method).
 * @param {number} x first int16
 * @param {number} y second int16
 * @returns {number} int32
 */
function interleave(x, y) {
  x = (x | (x<<8)) & 0x00FF00FF;
  x = (x | (x<<4)) & 0x0F0F0F0F;
  x = (x | (x<<2)) & 0x33333333;
  x = (x | (x<<1)) & 0x55555555;
  y = (y | (y<<8)) & 0x00FF00FF;
  y = (y | (y<<4)) & 0x0F0F0F0F;
  y = (y | (y<<2)) & 0x33333333;
  y = (y | (y<<1)) & 0x55555555;
  return y | (x<<1);
}
module.exports = interleave;
