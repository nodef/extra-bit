/**
 * Merge bits as per mask.
 * @param x first int32
 * @param y second int32
 * @param m bit mask (0 ⇒ from x)
 */
function merge(x: number, y: number, m: number): number {
  return x ^ ((x^y) & m);
}
export default merge;
