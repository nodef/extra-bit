The [bit] is a basic unit of information in information theory, computing.
This package includes [bit twiddling hacks] by Sean Eron Anderson and many others.<br>
:package: [NPM](https://www.npmjs.com/package/extra-bit),
:smiley_cat: [GitHub](https://github.com/orgs/nodef/packages?repo_name=extra-bit),
:running: [RunKit](https://npm.runkit.com/extra-bit),
:vhs: [Asciinema](https://asciinema.org/a/337114),
:moon: [Minified](https://www.npmjs.com/package/extra-bit.min),
:scroll: [Files](https://unpkg.com/extra-bit/),
:newspaper: [JSDoc](https://nodef.github.io/extra-bit/),
:blue_book: [Wiki](https://github.com/nodef/extra-bit/wiki/).

> Stability: Experimental.

<br>

```javascript
const bit = require("extra-bit");
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

| Method       | Action                                   |
| ------------ | ---------------------------------------- |
| [get]        | Gets a bit.                              |
| [set]        | Sets a bit.                              |
| [toggle]     | Toggles a bit.                           |
| [swap]       | Swaps bit sequences.                     |
| [scan]       | Finds index of first set bit from LSB.   |
| [count]      | Counts bits set.                         |
| [parity]     | Finds n-bit parity.                      |
| [rotate]     | Rotates bits.                            |
| [reverse]    | Reverses all bits.                       |
| [merge]      | Merges bits as per mask.                 |
| [interleave] | Interleaves bits of two int16s.          |
| [signExtend] | Sign extends variable bit-width integer. |

<br>
<br>

[![](https://img.youtube.com/vi/4Yy0pPTrHlk/maxresdefault.jpg)](https://www.youtube.com/watch?v=4Yy0pPTrHlk)

[bit]: https://en.wikipedia.org/wiki/Bit
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html
[get]: https://github.com/nodef/extra-bit/wiki/get
[set]: https://github.com/nodef/extra-bit/wiki/set
[swap]: https://github.com/nodef/extra-bit/wiki/swap
[scan]: https://github.com/nodef/extra-bit/wiki/scan
[count]: https://github.com/nodef/extra-bit/wiki/count
[parity]: https://github.com/nodef/extra-bit/wiki/parity
[reverse]: https://github.com/nodef/extra-bit/wiki/reverse
[merge]: https://github.com/nodef/extra-bit/wiki/merge
[interleave]: https://github.com/nodef/extra-bit/wiki/interleave
[signExtend]: https://github.com/nodef/extra-bit/wiki/signExtend
[toggle]: https://github.com/nodef/extra-bit/wiki/toggle
[rotate]: https://github.com/nodef/extra-bit/wiki/rotate
