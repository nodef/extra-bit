/**
 * Sign extends variable bit-width integer.
 * @param x variable bit-width integer
 * @param n bit width
 * @returns int32
 */
function signExtend(x: number, n: number): number {
  n = 32-n;
  return (x<<n)>>n;
}
export default signExtend;
