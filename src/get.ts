import ones from "./_ones";

/**
 * Get a bit.
 * @param x an int32
 * @param i bit index
 * @param w bit width (1)
 */
function get(x: number, i: number, w: number=1): number {
  return (x>>>i) & ones(w);
}
export default get;
