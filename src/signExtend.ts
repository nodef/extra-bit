/**
 * Sign extend variable bit-width integer.
 * @param x variable bit-width integer
 * @param w bit width (32)
 */
function signExtend(x: number, w: number=32): number {
  w = 32-w;
  return (x<<w)>>w;
}
export default signExtend;
