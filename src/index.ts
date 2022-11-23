// METHODS
// =======

// Get integer with 1s of specified width in bits.
function ones(w: number) {
  return (1<<w) - 1;
}


/**
 * Get bits at specified index.
 * @param x an int32
 * @param i bit index
 * @param w bit width [1]
 */
export function get(x: number, i: number, w: number=1): number {
  return (x>>>i) & ones(w);
}


/**
 * Get bits as per mask.
 * @param x an int32
 * @param m bit mask
 */
export function getAs(x: number, m: number): number {
  return x & m;
}


/**
 * Set bits at specified index.
 * @param x an int32
 * @param i bit index
 * @param v bit value [1]
 * @param w bit width [1]
 */
export function set(x: number, i: number, v: number=1, w: number=1): number {
  return (x & ~(ones(w)<<i)) | (v<<i);
}


/**
 * Set bits as per mask.
 * @param x an int32
 * @param m bit mask
 * @param f bit value [1]
 */
export function setAs(x: number, m: number, f: number=1): number {
  return (x & ~m) | (-f & m);
}


/**
 * Toggle bits at specified index.
 * @param x an int32
 * @param i bit index
 * @param w bit width [1]
 */
export function toggle(x: number, i: number, w: number=1): number {
  return x ^ (ones(w)<<i);
}


/**
 * Toggle bits as per mask.
 * @param x an int32
 * @param m bit mask
 */
export function toggleAs(x: number, m: number): number {
  return x ^ m;
}


/**
 * Swap bit sequences at specified indices.
 * @param x an int32
 * @param i first bit index
 * @param j second bit index
 * @param w bit width [1]
 */
export function swap(x: number, i: number, j: number, w: number=1): number {
  var t = ((x>>>i)^(x>>>j)) & ones(w);
  return x ^ ((t<<i)|(t<<j));
}


const MOD37_POS32: number[] = [
  32, 0, 1, 26, 2, 23, 27, 0, 3, 16, 24, 30, 28, 11, 0, 13, 4, 7, 17, 0,
  25, 22, 31, 15, 29, 10, 12, 6, 0, 21, 14, 9, 5, 20, 8, 19, 18
];


/**
 * Find index of first set bit from LSB.
 * @param x an int32
 */
export function scan(x: number): number {
  return MOD37_POS32[(-x & x) % 37];
}


const DEBRUIJN_POS32: number[] = [
  0,  9,  1, 10, 13, 21,  2, 29, 11, 14, 16, 18, 22, 25,  3, 30,
  8, 12, 20, 28, 15, 17, 24,  7, 19, 27, 23,  6, 26,  5,  4, 31
];


/**
 * Find index of first set bit from MSB.
 * @param x an int32
 */
export function scanReverse(x: number): number {
  x |= x>>>1;
  x |= x>>>2;
  x |= x>>>4;
  x |= x>>>8;
  x |= x>>>16;
  return DEBRUIJN_POS32[(x*0x07C4ACDD)>>>27];
}


/**
 * Count bits set.
 * @param x an int32
 */
export function count(x: number): number {
  x = x - ((x>>>1) & 0x55555555);
  x = (x & 0x33333333) + ((x>>>2) & 0x33333333);
  return ((x + (x>>>4) & 0x0F0F0F0F) * 0x01010101)>>>24;
}


// Calculate 1-bit parity.
function parity1(x: number): number {
  x ^= x>>>16;
  x ^= x>>>8;
  x ^= x>>>4;
  x &= 0xF;
  return (0x6996>>>x) & 1;
}

/**
 * Calculate n-bit parity.
 * @param x an int32
 * @param n number of bits [1]
 */
export function parity(x: number, n: number=1): number {
  if (n===1) return parity1(x);
  var m = (1<<n)-1, a = 0|0;
  while (x) {
    a ^= x&m;
    x >>>= n;
  }
  return a;
}


/**
 * Rotate bits by a certain amount.
 * @param x an int32
 * @param n rotate amount (+ve: left, -ve: right)
 */
export function rotate(x: number, n: number=0) {
  return n<0? x<<32+n | x>>>-n : x<<n | x>>32-n;
}


/**
 * Reverse all bits.
 * @param x an int32
 */
export function reverse(x: number): number {
  x = ((x>>>1) & 0x55555555) | ((x & 0x55555555)<<1);
  x = ((x>>>2) & 0x33333333) | ((x & 0x33333333)<<2);
  x = ((x>>>4) & 0x0F0F0F0F) | ((x & 0x0F0F0F0F)<<4);
  x = ((x>>>8) & 0x00FF00FF) | ((x & 0x00FF00FF)<<8);
  return (x>>>16) | (x<<16);
}


/**
 * Merge bits as per mask.
 * @param x first int32
 * @param y second int32
 * @param m bit mask (0 ⇒ from x)
 */
export function merge(x: number, y: number, m: number): number {
  return x ^ ((x^y) & m);
}


/**
 * Interleave bits of two int16s.
 * @param x first int16
 * @param y second int16
 * @returns int32
 */
export function interleave(x: number, y: number): number {
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
 * Sign extend variable bit-width integer.
 * @param x variable bit-width integer
 * @param w bit width (32)
 */
export function signExtend(x: number, w: number=32): number {
  w = 32-w;
  return (x<<w)>>w;
}
