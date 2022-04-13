/**
 * Rotate bits.
 * @param x an int32
 * @param n rotate amount (+ve: left, -ve: right)
 */
function rotate(x: number, n: number=0) {
  return n<0? x<<32+n | x>>>-n : x<<n | x>>32-n;
}
export default rotate;
