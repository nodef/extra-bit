// ones(x, i, I)
// zeros(x, i, I)?
// mask(x, i, I) (getAs)
// unmask(x, i, I)?
// slice(x, i, I)

function moveWithin(W: number, x: number, j: number, i: number=0, I: number=W): number {
  return slice(x, j) | slice(x, i, I)<<j | slice(x, j, i)<<(j+I-i) | mask(x,I)<<I;
  return slice(x, i) | slice(x, i, I)<<(i+j-I) | slice(x, I, j)<<i | mask(x, j+I-i);
}
export default moveWithin;
