/**
 * Sets a bit.
 * @param x an int32
 * @param i bit index
 * @param f bit value (1)
 */
function set(x: number, i: number, f: number=1): number {
  return (x & ~(1<<i)) | (f<<i);
}
export default set;
