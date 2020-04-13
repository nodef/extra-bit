import MOD37_POS32 from './_MOD37_POS32';

/**
 * Gets index of first set bit from LSB (mod37 method).
 * @param x an int32
 */
function scan(x: number): number {
  return MOD37_POS32[(-x & x) % 37];
}
export default scan;
