import MOD37_POS32 from "./_MOD37_POS32";

/**
 * Find index of first set bit from LSB.
 * @param x an int32
 */
function scan(x: number): number {
  return MOD37_POS32[(-x & x) % 37];
}
export default scan;
