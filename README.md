The [bit] is a basic unit of information in information theory, computing.
This package includes [bit twiddling hacks] by Sean Eron Anderson and many others.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-bit),
🌐 [Web](https://www.npmjs.com/package/extra-bit.web),
📜 [Files](https://unpkg.com/extra-bit/),
📰 [Docs](https://nodef.github.io/extra-bit/).
📘 [Wiki](https://github.com/nodef/extra-bit/wiki/).

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_bit` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-bit.web/index.js

<br>

```javascript
const bit = require('extra-bit');
// import * as bit from "extra-bit";
// import * as bit from "https://unpkg.com/extra-bit@1.0.50/index.mjs"; (deno)

bit.count(7);
// 3 (111 ⇒ 3)

bit.parity(8, 2);
// 2 (10,00 ⇒ 10)

bit.swap(6, 1, 0);
// 5 (110 ⇒ 101)

bit.reverse(0xFFFF0000);
// 65535 (0x0000FFFF)

bit.signExtend(15, 4);
// -1
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [get] | Get a bit. |
| [getAs] | Get bits as per mask. |
| [set] | Set a bit. |
| [setAs] | Set bits as per mask. |
| [toggle] | Toggle a bit. |
| [toggleAs] | Toggle bits as per mask. |
| [swap] | Swap bit sequences. |
| [scan] | Find index of first set bit from LSB. |
| [scanReverse] | Find index of first set bit from MSB. |
| [count] | Count bits set. |
| [parity] | Find n-bit parity. |
| [rotate] | Rotate bits. |
| [reverse] | Reverse all bits. |
| [merge] | Merge bits as per mask. |
| [interleave] | Interleave bits of two int16s. |
| [signExtend] | Sign extend variable bit-width integer. |

<br>
<br>

[![](https://img.youtube.com/vi/4Yy0pPTrHlk/maxresdefault.jpg)](https://www.youtube.com/watch?v=4Yy0pPTrHlk)

[bit]: https://en.wikipedia.org/wiki/Bit
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
[get]: https://nodef.github.io/extra-bit/modules.html#get
[getAs]: https://nodef.github.io/extra-bit/modules.html#getAs
[set]: https://nodef.github.io/extra-bit/modules.html#set
[setAs]: https://nodef.github.io/extra-bit/modules.html#setAs
[toggle]: https://nodef.github.io/extra-bit/modules.html#toggle
[toggleAs]: https://nodef.github.io/extra-bit/modules.html#toggleAs
[swap]: https://nodef.github.io/extra-bit/modules.html#swap
[scan]: https://nodef.github.io/extra-bit/modules.html#scan
[scanReverse]: https://nodef.github.io/extra-bit/modules.html#scanReverse
[count]: https://nodef.github.io/extra-bit/modules.html#count
[parity]: https://nodef.github.io/extra-bit/modules.html#parity
[rotate]: https://nodef.github.io/extra-bit/modules.html#rotate
[reverse]: https://nodef.github.io/extra-bit/modules.html#reverse
[merge]: https://nodef.github.io/extra-bit/modules.html#merge
[interleave]: https://nodef.github.io/extra-bit/modules.html#interleave
[signExtend]: https://nodef.github.io/extra-bit/modules.html#signExtend
