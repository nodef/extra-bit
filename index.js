/**
 * Counts bits set (parallel method).
 * @param {number} x an int32
 * @returns {number}
 */
function count(x) {
  x = x - ((x>>>1) & 0x55555555);
  x = (x & 0x33333333) + ((x>>>2) & 0x33333333);
  return ((x + (x>>>4) & 0x0F0F0F0F) * 0x01010101)>>>24;
}
/**
 * Gets a bit (right-shift method).
 * @param {number} x an int32
 * @param {number} i bit index
 * @returns {number}
 */
function get(x, i) {
  return (x>>>i) & 1;
}
/**
 * Interleaves bits of two int16s (binary magic method).
 * @param {number} x first int16
 * @param {number} y second int16
 * @returns {number} int32
 */
function interleave(x, y) {
  x = (x | (x<<8)) & 0x00FF00FF;
  x = (x | (x<<4)) & 0x0F0F0F0F;
  x = (x | (x<<2)) & 0x33333333;
  x = (x | (x<<1)) & 0x55555555;
  y = (y | (y<<8)) & 0x00FF00FF;
  y = (y | (y<<4)) & 0x0F0F0F0F;
  y = (y | (y<<2)) & 0x33333333;
  y = (y | (y<<1)) & 0x55555555;
  return y | (x<<1);
}
/**
 * Merges bits as per mask (xor method).
 * @param {number} x first int32
 * @param {number} y second int32
 * @param {number} m bit mask (0 => from x)
 * @returns {number}
 */
function merge(x, y, m) {
  return x ^ ((x^y) & m);
}
function parity1(x) {
  x ^= x>>>16;
  x ^= x>>>8;
  x ^= x>>>4;
  x &= 0xF;
  return (0x6996>>>x) & 1;
}

/**
 * Gets n-bit parity.
 * @param {number} x an int32
 * @param {number?} n number of bits (1)
 * @returns {number}
 */
function parity(x, n=1) {
  if(n===1) return parity1(x);
  var m = (1<<n)-1, a = 0|0;
  while(x) {
    a ^= x&m;
    x >>>= n;
  }
  return a;
}
/**
 * Reverses all bits (parallel method).
 * @param {number} x an int32
 * @returns {number}
 */
function reverse(x) {
  x = ((x>>>1) & 0x55555555) | ((x & 0x55555555)<<1);
  x = ((x>>>2) & 0x33333333) | ((x & 0x33333333)<<2);
  x = ((x>>>4) & 0x0F0F0F0F) | ((x & 0x0F0F0F0F)<<4);
  x = ((x>>>8) & 0x00FF00FF) | ((x & 0x00FF00FF)<<8);
  return (x>>>16) | (x<<16);
}
const MOD37_POS32 = [
  32, 0, 1, 26, 2, 23, 27, 0, 3, 16, 24, 30, 28, 11, 0, 13, 4, 7, 17, 0,
  25, 22, 31, 15, 29, 10, 12, 6, 0, 21, 14, 9, 5, 20, 8, 19, 18
];

/**
 * Gets index of first set bit from LSB (mod37 method).
 * @param {number} x an int32
 * @returns {number}
 */
function scan(x) {
  return MOD37_POS32[(-x & x) % 37];
}
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
/**
 * Sets bits as per mask (not method).
 * @param {number} x an int32
 * @param {number} m bit mask
 * @param {number?} f bit value (1)
 * @returns {number}
 */
function setAs(x, m, f=1) {
  return (x & ~m) | (-f & m);
}
/**
 * Sets a bit (left-shift method).
 * @param {number} x an int32
 * @param {number} i bit index
 * @param {number?} f bit value (1)
 * @returns {number}
 */
function set(x, i, f=1) {
  return (x & ~(1<<i)) | (f<<i);
}
/**
 * Sign extends variable bit-width integer.
 * @param {number} x variable bit-width integer
 * @param {number} n bit width
 * @returns {number} int32
 */
function signExtend(x, n) {
  n = 32-n;
  return (x<<n)>>n;
}
/**
 * Swaps bit sequences (xor method).
 * @param {number} x an int32
 * @param {number} i first bit index
 * @param {number} j second bit index
 * @param {number?} n bit width (1)
 * @returns {number}
 */
function swap(x, i, j, n=1) {
  var x = ((x>>>i)^(x>>>j)) & ((1<<n)-1);
  return x ^ ((x<<i)|(x<<j));
}
exports.count = count;
exports.get = get;
exports.interleave = interleave;
exports.merge = merge;
exports.parity = parity;
exports.reverse = reverse;
exports.scan = scan;
exports.scanReverse = scanReverse;
exports.setAs = setAs;
exports.set = set;
exports.signExtend = signExtend;
exports.swap = swap;
