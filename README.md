The [bit] is a basic unit of information in information theory, computing.
This package includes a number of very interesting bit twiddling hacks by
Sean Eron Anderson and many others.

Each method is also available as separate package for use by bundling tools,
like [browserify], [rollup], [uglify-js].

> Stability: Experimental.

```javascript
const bit = require('extra-bit');

bit.count(7);
// 3 (111 => 3)

bit.parity(8, 2);
// 2 (10,00 => 10)

bit.swap(6, 1, 0);
// 5 (110 => 101)

bit.reverse(0xFFFF0000);
// 65535 (0xFFFF0000 => 0x0000FFFF)

bit.signExtend(15, 4);
// -1
```

### reference

| Method                | Action
|-----------------------|-------
| [get]                 | Gets a bit (right-shift method).
| [set]                 | Sets a bit (left-shift method).
| [setAs]               | Sets bits as per mask (not method).
| [swap]                | Swaps bit sequences (xor method).
| [scan]                | Gets index of first set bit from LSB (mod37 method).
| [scanReverse]         | Gets index of first set bit from MSB (DeBruijn method).
| [count]               | Counts bits set (parallel method).
| [parity]              | Gets n-bit parity.
| [reverse]             | Reverses all bits (parallel method).
| [merge]               | Merges bits as per mask (xor method).
| [interleave]          | Interleaves bits of two int16s (binary magic method).
| [signExtend]          | Sign extends variable bit-width integer.

<br>

[![nodef](https://merferry.glitch.me/card/extra-bit.svg)](https://nodef.github.io)

> Browserified, minified version of this package is [extra-bit.min].

[get]: https://github.com/nodef/extra-bit/wiki/get
[set]: https://github.com/nodef/extra-bit/wiki/set
[setAs]: https://github.com/nodef/extra-bit/wiki/setAs
[swap]: https://github.com/nodef/extra-bit/wiki/swap
[scan]: https://github.com/nodef/extra-bit/wiki/scan
[scanReverse]: https://github.com/nodef/extra-bit/wiki/scanReverse
[count]: https://github.com/nodef/extra-bit/wiki/count
[parity]: https://github.com/nodef/extra-bit/wiki/parity
[reverse]: https://github.com/nodef/extra-bit/wiki/reverse
[merge]: https://github.com/nodef/extra-bit/wiki/merge
[interleave]: https://github.com/nodef/extra-bit/wiki/interleave
[signExtend]: https://github.com/nodef/extra-bit/wiki/signExtend

[bit]: https://en.wikipedia.org/wiki/Bit
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[extra-bit.min]: https://www.npmjs.com/package/extra-bit.min
