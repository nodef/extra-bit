/**
 * Get bits as per mask.
 * @param x an int32
 * @param m bit mask
 */
function getAs(x: number, m: number): number {
  return x & m;
}
export default getAs;
