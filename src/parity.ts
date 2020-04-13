function parity1(x: number): number {
  x ^= x>>>16;
  x ^= x>>>8;
  x ^= x>>>4;
  x &= 0xF;
  return (0x6996>>>x) & 1;
}

/**
 * Gets n-bit parity.
 * @param x an int32
 * @param n number of bits (1)
 */
function parity(x: number, n: number=1): number {
  if(n===1) return parity1(x);
  var m = (1<<n)-1, a = 0|0;
  while(x) {
    a ^= x&m;
    x >>>= n;
  }
  return a;
}
export default parity;
