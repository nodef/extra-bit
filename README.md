The [bit] is a basic unit of information in information theory, computing.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-bit),
🌐 [Web](https://www.npmjs.com/package/extra-bit.web),
📜 [Files](https://unpkg.com/extra-bit/),
📰 [Docs](https://nodef.github.io/extra-bit/),
📘 [Wiki](https://github.com/nodef/extra-bit/wiki/).

The concept of a **bit**, which stands for *binary digit*, has been a
fundamental unit of information in the fields of information theory and
computing. Bitwise operations are used to manipulate and process data at the bit
level, and these operations are *crucial for efficient programming* in a variety
of domains, such as computer graphics and cryptography. JavaScript converts a
`Number` (a *64-bit floating* *point number*) to a *32-bit integer* when bitwise
operators (such as `|`) are applied. All bitwise operations are performed on
**32-bit integers**. This package includes [bit twiddling hacks] by *Sean Eron*
*Anderson* and many others.

This package is available in *Node.js* and *Web* formats. To use it on the web,
simply use the `extra_bit` global variable after loading with a `<script>`
tag from the [jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[bit]: https://en.wikipedia.org/wiki/Bit
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-bit.web/index.js

<br>

```javascript
const xbit = require('extra-bit');
// import * as xbit from "extra-bit";
// import * as xbit from "https://unpkg.com/extra-bit/index.mjs"; (deno)

xbit.count(7);
// → 3 (111 ⇒ 3)

xbit.parity(8, 2);
// → 2 (10,00 ⇒ 10)

xbit.swap(6, 1, 0);
// → 5 (110 ⇒ 101)

xbit.reverse(0xFFFF0000);
// → 65535 (0x0000FFFF)

xbit.signExtend(15, 4);
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
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-bit)

[get]: https://github.com/nodef/extra-bit/wiki/get
[getAs]: https://github.com/nodef/extra-bit/wiki/getAs
[set]: https://github.com/nodef/extra-bit/wiki/set
[setAs]: https://github.com/nodef/extra-bit/wiki/setAs
[toggle]: https://github.com/nodef/extra-bit/wiki/toggle
[toggleAs]: https://github.com/nodef/extra-bit/wiki/toggleAs
[swap]: https://github.com/nodef/extra-bit/wiki/swap
[scan]: https://github.com/nodef/extra-bit/wiki/scan
[scanReverse]: https://github.com/nodef/extra-bit/wiki/scanReverse
[count]: https://github.com/nodef/extra-bit/wiki/count
[parity]: https://github.com/nodef/extra-bit/wiki/parity
[rotate]: https://github.com/nodef/extra-bit/wiki/rotate
[reverse]: https://github.com/nodef/extra-bit/wiki/reverse
[merge]: https://github.com/nodef/extra-bit/wiki/merge
[interleave]: https://github.com/nodef/extra-bit/wiki/interleave
[signExtend]: https://github.com/nodef/extra-bit/wiki/signExtend
