import ones from "./_ones";

/**
 * Set a bit.
 * @param x an int32
 * @param i bit index
 * @param v bit value (1)
 * @param w bit width (1)
 */
function set(x: number, i: number, v: number=1, w: number=1): number {
  return (x & ~(ones(w)<<i)) | (v<<i);
}
export default set;
