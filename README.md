The [bit] is a basic unit of information in information theory, computing.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-bit),
📦 [NPM](https://www.npmjs.com/package/extra-bit),
📰 [Docs](https://jsr.io/@nodef/extra-bit/doc).

The concept of a **bit**, which stands for *binary digit*, has been a
fundamental unit of information in the fields of information theory and
computing. Bitwise operations are used to manipulate and process data at the bit
level, and these operations are *crucial for efficient programming* in a variety
of domains, such as computer graphics and cryptography. JavaScript converts a
`Number` (a *64-bit floating* *point number*) to a *32-bit integer* when bitwise
operators (such as `|`) are applied. All bitwise operations are performed on
**32-bit integers**. This package includes [bit twiddling hacks] by *Sean Eron*
*Anderson* and many others.

[bit]: https://en.wikipedia.org/wiki/Bit
[bit twiddling hacks]: https://graphics.stanford.edu/~seander/bithacks.html

<br>

```javascript
import * as xbit from "jsr:@nodef/extra-bit";

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


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-bit)


[get]: https://jsr.io/@nodef/extra-version/doc/~/get
[getAs]: https://jsr.io/@nodef/extra-version/doc/~/getAs
[set]: https://jsr.io/@nodef/extra-version/doc/~/set
[setAs]: https://jsr.io/@nodef/extra-version/doc/~/setAs
[toggle]: https://jsr.io/@nodef/extra-version/doc/~/toggle
[toggleAs]: https://jsr.io/@nodef/extra-version/doc/~/toggleAs
[swap]: https://jsr.io/@nodef/extra-version/doc/~/swap
[scan]: https://jsr.io/@nodef/extra-version/doc/~/scan
[scanReverse]: https://jsr.io/@nodef/extra-version/doc/~/scanReverse
[count]: https://jsr.io/@nodef/extra-version/doc/~/count
[parity]: https://jsr.io/@nodef/extra-version/doc/~/parity
[rotate]: https://jsr.io/@nodef/extra-version/doc/~/rotate
[reverse]: https://jsr.io/@nodef/extra-version/doc/~/reverse
[merge]: https://jsr.io/@nodef/extra-version/doc/~/merge
[interleave]: https://jsr.io/@nodef/extra-version/doc/~/interleave
[signExtend]: https://jsr.io/@nodef/extra-version/doc/~/signExtend
