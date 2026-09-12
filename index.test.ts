import {assertEquals} from "@std/assert";
import {
  get,
  getAs,
  set,
  setAs,
  toggle,
  toggleAs,
  swap,
  scan,
  scanReverse,
  count,
  parity,
  rotate,
  reverse,
  merge,
  interleave,
  signExtend,
} from "./index.ts";




Deno.test("example1", () => {
  let a;
  a = count(7);
  assertEquals(a, 3);
  // → 3 (111 ⇒ 3)

  a = parity(8, 2);
  assertEquals(a, 2);
  // → 2 (10,00 ⇒ 10)

  a = swap(6, 1, 0);
  assertEquals(a, 5);
  // → 5 (110 ⇒ 101)

  a = reverse(0xFFFF0000);
  assertEquals(a, 65535);
  // → 65535 (0x0000FFFF)

  a = signExtend(15, 4);
  assertEquals(a, -1);
  // → -1
});




// Get bits at specified index.
Deno.test("get", () => {
  let a;
  a = get(6, 0);
  assertEquals(a, 0);  // 110,0 ⇒ 0
  a = get(6, 1);
  assertEquals(a, 1);  // 110,1 ⇒ 1
  a = get(6, 2);
  assertEquals(a, 1);  // 110,2 ⇒ 1
});


// Get bits as per mask.
Deno.test("getAs", () => {
  let a;
  a = getAs(6, 4);
  assertEquals(a, 4);  // 110,100 ⇒ 100
  a = getAs(6, 7);
  assertEquals(a, 6);  // 110,111 ⇒ 110
  a = getAs(6, 5);
  assertEquals(a, 4);  // 110,101 ⇒ 100
});


// Set bits at specified index.
Deno.test("set", () => {
  let a;
  a = set(6, 0, 1);
  assertEquals(a, 7);  // 110,0,1 ⇒ 111
  a = set(6, 2, 1);
  assertEquals(a, 6);  // 110,2,1 ⇒ 110
  a = set(6, 2, 0);
  assertEquals(a, 2);  // 110,2,0 ⇒ 010
});


// Set bits as per mask.
Deno.test("setAs", () => {
  let a;
  a = setAs(8, 2, 1);
  assertEquals(a, 10);    // 0x8 set 0x2 ⇒ 0xA
  a = setAs(15, 3, 0);
  assertEquals(a, 12);    // 0xF clear 0x3 ⇒ 0xC
  a = setAs(0x1234, 0x430, 1);
  assertEquals(a, 5684);  // 0x1234 set 0x430 ⇒ 0x1634
});


// Toggle bits at specified index.
Deno.test("toggle", () => {
  let a;
  a = toggle(6, 0);
  assertEquals(a, 7);  // 110,0 ⇒ 111
  a = toggle(6, 1);
  assertEquals(a, 4);  // 110,1 ⇒ 100
  a = toggle(6, 2);
  assertEquals(a, 2);  // 110,2 ⇒ 010
});


// Toggle bits as per mask.
Deno.test("toggleAs", () => {
  let a;
  a = toggleAs(6, 1);
  assertEquals(a, 7);  // 110,000 ⇒ 111
  a = toggleAs(6, 7);
  assertEquals(a, 1);  // 110,111 ⇒ 001
  a = toggleAs(6, 3);
  assertEquals(a, 5);  // 110,011 ⇒ 101
});


// Swap bit sequences at specified indices.
Deno.test("swap", () => {
  let a;
  a = swap(6, 1, 0);
  assertEquals(a, 5);      // 110 ⇒ 101
  a = swap(0x1234, 8, 4, 4);
  assertEquals(a, 4900);   // 0x1234 ⇒ 0x1324
  a = swap(0x4AAB, 8, 0, 8);
  assertEquals(a, 43850);  // 0x4AAB ⇒ 0xAB4A
});


// Find index of first set bit from LSB.
Deno.test("scan", () => {
  let a;
  a = scan(7);
  assertEquals(a, 0);  // 111 ⇒ 0
  a = scan(12);
  assertEquals(a, 2);  // 1100 ⇒ 2
  a = scan(64);
  assertEquals(a, 6);  // 1000000 ⇒ 6
});


// Find index of first set bit from MSB.
Deno.test("scanReverse", () => {
  let a;
  a = scanReverse(13);
  assertEquals(a, 3);  // 1101 ⇒ 3
  a = scanReverse(5);
  assertEquals(a, 2);  // 101 ⇒ 2
  a = scanReverse(1);
  assertEquals(a, 0);  // 1 ⇒ 0
});


// Count bits set.
Deno.test("count", () => {
  let a;
  a = count(7);
  assertEquals(a, 3);  // 111 ⇒ 3
  a = count(12);
  assertEquals(a, 2);  // 1100 ⇒ 2
  a = count(63);
  assertEquals(a, 6);  // 111111 ⇒ 6
});


// Calculate n-bit parity.
Deno.test("parity", () => {
  let a;
  a = parity(7);
  assertEquals(a, 1);   // 1,1,1 ⇒ 1
  a = parity(5);
  assertEquals(a, 0);   // 1,0,1 ⇒ 0
  a = parity(8, 2);
  assertEquals(a, 2);   // 10,00 ⇒ 10
  a = parity(63, 4);
  assertEquals(a, 12);  // 11,1111 ⇒ 1100
});


// Rotate bits by a certain amount.
Deno.test("rotate", () => {
  let a;
  a = rotate(0x11112222, 4);
  assertEquals(a, 286401057);  // 0x11122221
  a = rotate(0x11112222, -4);
  assertEquals(a, 554766882);  // 0x21111222
});


// Reverse all bits.
Deno.test("reverse", () => {
  let a;
  a = reverse(0xFFFF0000);
  assertEquals(a, 65535);      // 0x0000FFFF
  a = reverse(0x00AABBCC);
  assertEquals(a, 870143232);  // 0x33DD5500
  a = reverse(0x1234);
  assertEquals(a, 742916096);  // 0x2C480000
});


// Merge bits as per mask.
Deno.test("merge", () => {
  let a;
  a = merge(0x12, 0x24, 0x0F);
  assertEquals(a, 20);     // 0x14
  a = merge(0x1234, 0xABCD, 0x0F0F);
  assertEquals(a, 6973);   // 0x1B3D
  a = merge(0xAAAA, 0xBBBB, 0x3333);
  assertEquals(a, 48059);  // 0xBBBB
});


// Interleave bits of two int16s.
Deno.test("interleave", () => {
  let a;
  a = interleave(0x0000, 0xFFFF);
  assertEquals(a, 1431655765);  // 0x55555555
  a = interleave(0x1234, 0x1234);
  assertEquals(a, 51121968);    // 0x030C0F30
  a = interleave(0x1234, 0x4321);
  assertEquals(a, 302845473);   // 0x120D0E21
});


// Sign extend variable bit-width integer.
Deno.test("signExtend", () => {
  let a;
  a = signExtend(15, 4);
  assertEquals(a, -1);  // 1111 ⇒ -1
  a = signExtend(3, 3);
  assertEquals(a, 3);   // 011 ⇒ 3
  a = signExtend(4, 3);
  assertEquals(a, -4);  // 100 ⇒ -4
});
