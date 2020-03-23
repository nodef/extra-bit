/**
 * Gets 1-bit parity (parallel method).
 * @param {number} x an int32
 * @returns {number}
 */
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
 * @param {number} n number of bits (1)
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
module.exports = parity;
