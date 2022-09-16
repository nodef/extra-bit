A collection of common bitwise operations.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-bit),
🌐 [Web](https://www.npmjs.com/package/extra-bit.web),
📜 [Files](https://unpkg.com/extra-bit/),
📰 [Docs](https://nodef.github.io/extra-bit/),
📘 [Wiki](https://github.com/nodef/extra-bit/wiki/).

The [bit] is a basic unit of information in information theory, computing. This
package includes [bit twiddling hacks] by *Sean Eron Anderson* and many others.
JavaScript converts a `Number` (a *64-bit floating point number*) to a *32-bit*
*integer* when bitwise operators (such as `|`) are applied. All bitwise operations
are performed on **32-bit integers**.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_bit` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[bit]: https://en.wikipedia.org/wiki/Bit
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-bit.web/index.js

<br>

```javascript
const bit = require('extra-bit');
// import * as bit from "extra-bit";
// import * as bit from "https://unpkg.com/extra-bit/index.mjs"; (deno)

bit.count(7);
// → 3 (111 ⇒ 3)

bit.parity(8, 2);
// → 2 (10,00 ⇒ 10)

bit.swap(6, 1, 0);
// → 5 (110 ⇒ 101)

bit.reverse(0xFFFF0000);
// → 65535 (0x0000FFFF)

bit.signExtend(15, 4);
// → -1
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [get] | Get bits at specified index. |
| [getAs] | Get bits as per mask. |
| [set] | Set bits at specified index. |
| [setAs] | Set bits as per mask. |
| [toggle] | Toggle bits at specified index. |
| [toggleAs] | Toggle bits as per mask. |
| [swap] | Swap bit sequences at specified indices. |
| [scan] | Find index of first set bit from LSB. |
| [scanReverse] | Find index of first set bit from MSB. |
| [count] | Count bits set. |
| [parity] | Calculate n-bit parity. |
| [rotate] | Rotate bits by a certain amount. |
| [reverse] | Reverse all bits. |
| [merge] | Merge bits as per mask. |
| [interleave] | Interleave bits of two int16s. |
| [signExtend] | Sign extend variable bit-width integer. |

<br>
<br>


## References

- [Bit Twiddling Hacks by Sean Eron Anderson](https://graphics.stanford.edu/~seander/bithacks.html)
- [bit-twiddle package by @mikolalysenko](https://www.npmjs.com/package/bit-twiddle)

<br>
<br>


[![](https://img.youtube.com/vi/4Yy0pPTrHlk/maxresdefault.jpg)](https://www.youtube.com/watch?v=4Yy0pPTrHlk)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/249481796.svg)](https://zenodo.org/badge/latestdoi/249481796)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-bit/badge.svg)](https://coveralls.io/github/nodef/extra-bit)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fa297c53c53f4e01bce8/test_coverage)](https://codeclimate.com/github/nodef/extra-bit/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/fa297c53c53f4e01bce8/maintainability)](https://codeclimate.com/github/nodef/extra-bit/maintainability)


[get]: https://nodef.github.io/extra-bit/functions/get.html
[getAs]: https://nodef.github.io/extra-bit/functions/getAs.html
[set]: https://nodef.github.io/extra-bit/functions/set.html
[setAs]: https://nodef.github.io/extra-bit/functions/setAs.html
[toggle]: https://nodef.github.io/extra-bit/functions/toggle.html
[toggleAs]: https://nodef.github.io/extra-bit/functions/toggleAs.html
[swap]: https://nodef.github.io/extra-bit/functions/swap.html
[scan]: https://nodef.github.io/extra-bit/functions/scan.html
[scanReverse]: https://nodef.github.io/extra-bit/functions/scanReverse.html
[count]: https://nodef.github.io/extra-bit/functions/count.html
[parity]: https://nodef.github.io/extra-bit/functions/parity.html
[rotate]: https://nodef.github.io/extra-bit/functions/rotate.html
[reverse]: https://nodef.github.io/extra-bit/functions/reverse.html
[merge]: https://nodef.github.io/extra-bit/functions/merge.html
[interleave]: https://nodef.github.io/extra-bit/functions/interleave.html
[signExtend]: https://nodef.github.io/extra-bit/functions/signExtend.html
