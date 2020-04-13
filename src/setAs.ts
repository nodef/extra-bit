/**
 * Sets bits as per mask (not method).
 * @param x an int32
 * @param m bit mask
 * @param f bit value (1)
 */
function setAs(x: number, m: number, f: number=1): number {
  return (x & ~m) | (-f & m);
}
export default setAs;
