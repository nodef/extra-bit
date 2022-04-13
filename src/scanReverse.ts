import DEBRUIJN_POS32 from "./_DEBRUIJN_POS32";

/**
 * Find index of first set bit from MSB.
 * @param x an int32
 */
function scanReverse(x: number): number {
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return DEBRUIJN_POS32[(x*0x07C4ACDD)>>>27];
}
export default scanReverse;
