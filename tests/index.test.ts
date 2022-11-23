import * as bit from "../src";
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
} from "../src";




test("example1", () => {
  var a = bit.count(7);
  expect(a).toBe(3);
  // → 3 (111 ⇒ 3)

  var a = bit.parity(8, 2);
  expect(a).toBe(2);
  // → 2 (10,00 ⇒ 10)

  var a = bit.swap(6, 1, 0);
  expect(a).toBe(5);
  // → 5 (110 ⇒ 101)

  var a = bit.reverse(0xFFFF0000);
  expect(a).toBe(65535);
  // → 65535 (0x0000FFFF)

  var a = bit.signExtend(15, 4);
  expect(a).toBe(-1);
  // → -1
});




// Get bits at specified index.
test("get", () => {
  var a = get(6, 0);
  expect(a).toBe(0);  // 110,0 ⇒ 0
  var a = get(6, 1);
  expect(a).toBe(1);  // 110,1 ⇒ 1
  var a = get(6, 2);
  expect(a).toBe(1);  // 110,2 ⇒ 1
});


// Get bits as per mask.
test("getAs", () => {
  var a = getAs(6, 4);
  expect(a).toBe(4);  // 110,100 ⇒ 100
  var a = getAs(6, 7);
  expect(a).toBe(6);  // 110,111 ⇒ 110
  var a = getAs(6, 5);
  expect(a).toBe(4);  // 110,101 ⇒ 100
});


// Set bits at specified index.
test("set", () => {
  var a = set(6, 0, 1);
  expect(a).toBe(7);  // 110,0,1 ⇒ 111
  var a = set(6, 2, 1);
  expect(a).toBe(6);  // 110,2,1 ⇒ 110
  var a = set(6, 2, 0);
  expect(a).toBe(2);  // 110,2,0 ⇒ 010
});


// Set bits as per mask.
test("setAs", () => {
  var a = setAs(8, 2, 1);
  expect(a).toBe(10);    // 0x8 set 0x2 ⇒ 0xA
  var a = setAs(15, 3, 0);
  expect(a).toBe(12);    // 0xF clear 0x3 ⇒ 0xC
  var a = setAs(0x1234, 0x430, 1);
  expect(a).toBe(5684);  // 0x1234 set 0x430 ⇒ 0x1634
});


// Toggle bits at specified index.
test("toggle", () => {
  var a = toggle(6, 0);
  expect(a).toBe(7);  // 110,0 ⇒ 111
  var a = toggle(6, 1);
  expect(a).toBe(4);  // 110,1 ⇒ 100
  var a = toggle(6, 2);
  expect(a).toBe(2);  // 110,2 ⇒ 010
});


// Toggle bits as per mask.
test("toggleAs", () => {
  var a = toggleAs(6, 1);
  expect(a).toBe(7);  // 110,000 ⇒ 111
  var a = toggleAs(6, 7);
  expect(a).toBe(1);  // 110,111 ⇒ 001
  var a = toggleAs(6, 3);
  expect(a).toBe(5);  // 110,011 ⇒ 101
});


// Swap bit sequences at specified indices.
test("swap", () => {
  var a = swap(6, 1, 0);
  expect(a).toBe(5);      // 110 ⇒ 101
  var a = swap(0x1234, 8, 4, 4);
  expect(a).toBe(4900);   // 0x1234 ⇒ 0x1324
  var a = swap(0x4AAB, 8, 0, 8);
  expect(a).toBe(43850);  // 0x4AAB ⇒ 0xAB4A
});


// Find index of first set bit from LSB.
test("scan", () => {
  var a = scan(7);
  expect(a).toBe(0);  // 111 ⇒ 0
  var a = scan(12);
  expect(a).toBe(2);  // 1100 ⇒ 2
  var a = scan(64);
  expect(a).toBe(6);  // 1000000 ⇒ 6
});


// Find index of first set bit from MSB.
test("scanReverse", () => {
  var a = scanReverse(13);
  expect(a).toBe(3);  // 1101 ⇒ 3
  var a = scanReverse(5);
  expect(a).toBe(2);  // 101 ⇒ 2
  var a = scanReverse(1);
  expect(a).toBe(0);  // 1 ⇒ 0
});


// Count bits set.
test("count", () => {
  var a = count(7);
  expect(a).toBe(3);  // 111 ⇒ 3
  var a = count(12);
  expect(a).toBe(2);  // 1100 ⇒ 2
  var a = count(63);
  expect(a).toBe(6);  // 111111 ⇒ 6
});


// Calculate n-bit parity.
test("parity", () => {
  var a = parity(7);
  expect(a).toBe(1);   // 1,1,1 ⇒ 1
  var a = parity(5);
  expect(a).toBe(0);   // 1,0,1 ⇒ 0
  var a = parity(8, 2);
  expect(a).toBe(2);   // 10,00 ⇒ 10
  var a = parity(63, 4);
  expect(a).toBe(12);  // 11,1111 ⇒ 1100
});


// Rotate bits by a certain amount.
test("rotate", () => {
  var a = rotate(0x11112222, 4);
  expect(a).toBe(286401057);  // 0x11122221
  var a = rotate(0x11112222, -4);
  expect(a).toBe(554766882);  // 0x21111222
});


// Reverse all bits.
test("reverse", () => {
  var a = reverse(0xFFFF0000);
  expect(a).toBe(65535);      // 0x0000FFFF
  var a = reverse(0x00AABBCC);
  expect(a).toBe(870143232);  // 0x33DD5500
  var a = reverse(0x1234);
  expect(a).toBe(742916096);  // 0x2C480000
});


// Merge bits as per mask.
test("merge", () => {
  var a = merge(0x12, 0x24, 0x0F);
  expect(a).toBe(20);     // 0x14
  var a = merge(0x1234, 0xABCD, 0x0F0F);
  expect(a).toBe(6973);   // 0x1B3D
  var a = merge(0xAAAA, 0xBBBB, 0x3333);
  expect(a).toBe(48059);  // 0xBBBB
});


// Interleave bits of two int16s.
test("interleave", () => {
  var a = interleave(0x0000, 0xFFFF);
  expect(a).toBe(1431655765);  // 0x55555555
  var a = interleave(0x1234, 0x1234);
  expect(a).toBe(51121968);    // 0x030C0F30
  var a = interleave(0x1234, 0x4321);
  expect(a).toBe(302845473);   // 0x120D0E21
});


// Sign extend variable bit-width integer.
test("signExtend", () => {
  var a = signExtend(15, 4);
  expect(a).toBe(-1);  // 1111 ⇒ -1
  var a = signExtend(3, 3);
  expect(a).toBe(3);   // 011 ⇒ 3
  var a = signExtend(4, 3);
  expect(a).toBe(-4);  // 100 ⇒ -4
});
