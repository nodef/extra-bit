The [bit] is a basic unit of information in information theory, computing. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

This package includes a number of very interesting bit twiddling hacks by
Sean Eron Anderson and many others.

Methods as separate packages:
- `@extra-bit/swap`: use [rollup] to bundle this es module.
- `@extra-bit/swap.min`: use in browser ([browserify], [uglify-js]).

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
| [get]                 | Gets a bit.
| [set]                 | Sets a bit.
| [setAs]               | Sets bits as per mask.
| [swap]                | Swaps bit sequences.
| [scan]                | Gets index of first set bit from LSB.
| [scanReverse]         | Gets index of first set bit from MSB.
| [count]               | Counts bits set.
| [parity]              | Gets n-bit parity.
| [reverse]             | Reverses all bits.
| [merge]               | Merges bits as per mask.
| [interleave]          | Interleaves bits of two int16s.
| [signExtend]          | Sign extends variable bit-width integer.

<br>

[![nodef](https://merferry.glitch.me/card/extra-bit.svg)](https://nodef.github.io)

[bit]: https://en.wikipedia.org/wiki/Bit
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
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
[:running:]: https://npm.runkit.com/extra-bit
[:package:]: https://www.npmjs.com/package/extra-bit
[:moon:]: https://www.npmjs.com/package/extra-bit.min
[:vhs:]: https://asciinema.org/a/319613
[:ledger:]: https://unpkg.com/extra-bit/
