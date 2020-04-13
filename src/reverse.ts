/**
 * Reverses all bits.
 * @param x an int32
 */
function reverse(x: number): number {
  x = ((x>>>1) & 0x55555555) | ((x & 0x55555555)<<1);
  x = ((x>>>2) & 0x33333333) | ((x & 0x33333333)<<2);
  x = ((x>>>4) & 0x0F0F0F0F) | ((x & 0x0F0F0F0F)<<4);
  x = ((x>>>8) & 0x00FF00FF) | ((x & 0x00FF00FF)<<8);
  return (x>>>16) | (x<<16);
}
export default reverse;
