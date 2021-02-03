/**
 * Gets a bit.
 * @param x an int32
 * @param i bit index
 */
function get(x: number, i: number): number {
  return (x>>>i) & 1;
}
export default get;
