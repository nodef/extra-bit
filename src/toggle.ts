/**
 * Toggle a bit.
 * @param x an int32
 * @param i bit index
 */
function toggle(x: number, i: number): number {
  return x ^ (1<<i);
}
export default toggle;
