function rotate(x: number, n: number=0) {
  var N = 16;
  return n<0? x<<N+n | x>>-n : x<<n | x>>N-n;
}
export default rotate;
