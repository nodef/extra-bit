/**
 * Toggles bits as per mask.
 * @param x an int32
 * @param m bit mask
 */
function toggleAs(x: number, m: number): number {
  return x ^ m;
}
export default toggleAs;
