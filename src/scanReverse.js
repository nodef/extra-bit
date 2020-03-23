const DEBRUIJN_POS32 = [
  0,  9,  1, 10, 13, 21,  2, 29, 11, 14, 16, 18, 22, 25,  3, 30, 
  8, 12, 20, 28, 15, 17, 24,  7, 19, 27, 23,  6, 26,  5,  4, 31
];

/**
 * Gets index of first set bit from MSB (DeBruijn method).
 * @param {number} x an int32
 * @returns {number}
 */
function scanReverse(x) {
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return DEBRUIJN_POS32[(x*0x07C4ACDD)>>>27];
}
module.exports = scanReverse;
