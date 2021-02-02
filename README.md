The [bit] is a basic unit of information in information theory, computing. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

Methods as separate packages:
- `@extra-bit/swap`: use [rollup] to bundle this es module.
- `@extra-bit/swap.min`: use in browser ([browserify], [uglify-js]).

This package includes [bit twiddling hacks] by Sean Eron Anderson and many others.

> Stability: Experimental.

```javascript
const bit = require('extra-bit');
// import * as bit from 'extra-bit';
// import * as bit from 'https://unpkg.com/extra-bit@1.0.50/index.mjs'; (deno)

bit.count(7);
// 3 (111 => 3)

bit.parity(8, 2);
// 2 (10,00 => 10)

bit.swap(6, 1, 0);
// 5 (110 => 101)

bit.reverse(0xFFFF0000);
// 65535 (0x0000FFFF)

bit.signExtend(15, 4);
// -1
```

### reference

| Method                | Action
|-----------------------|-------
| [get]                 | Gets a bit.
| [set]                 | Sets a bit.
| [toggle]              | Toggles a bit.
| [swap]                | Swaps bit sequences.
| [scan]                | Gets index of first set bit from LSB.
| [count]               | Counts bits set.
| [parity]              | Gets n-bit parity.
| [rotate]              | Rotates bits.
| [reverse]             | Reverses all bits.
| [merge]               | Merges bits as per mask.
| [interleave]          | Interleaves bits of two int16s.
| [signExtend]          | Sign extends variable bit-width integer.

<br>

[![](https://img.youtube.com/vi/4Yy0pPTrHlk/maxresdefault.jpg)](https://www.youtube.com/watch?v=4Yy0pPTrHlk)

[bit]: https://en.wikipedia.org/wiki/Bit
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
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
[toggle]: https://github.com/nodef/extra-bit/wiki/toggle
[rotate]: https://github.com/nodef/extra-bit/wiki/rotate
[:running:]: https://npm.runkit.com/extra-bit
[:package:]: https://www.npmjs.com/package/extra-bit
[:moon:]: https://www.npmjs.com/package/extra-bit.min
[:ledger:]: https://unpkg.com/extra-bit/
[:vhs:]: https://asciinema.org/a/337114
