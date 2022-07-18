const bit = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = bit.count(7);
  assert.equal(a, 3);
  // → 3 (111 ⇒ 3)

  var a = bit.parity(8, 2);
  assert.equal(a, 2);
  // → 2 (10,00 ⇒ 10)

  var a = bit.swap(6, 1, 0);
  assert.equal(a, 5);
  // → 5 (110 ⇒ 101)

  var a = bit.reverse(0xFFFF0000);
  assert.equal(a, 65535);
  // → 65535 (0x0000FFFF)

  var a = bit.signExtend(15, 4);
  assert.equal(a, -1);
  // → -1
}
example1();




// Get bits at specified index.
function testGet() {
  var a = bit.get(6, 0);
  assert.equal(a, 0);  // 110,0 ⇒ 0
  var a = bit.get(6, 1);
  assert.equal(a, 1);  // 110,1 ⇒ 1
  var a = bit.get(6, 2);
  assert.equal(a, 1);  // 110,2 ⇒ 1
}
testGet();


// Get bits as per mask.
function testGetAs() {
  var a = bit.getAs(6, 4);
  assert.equal(a, 4);  // 110,100 ⇒ 100
  var a = bit.getAs(6, 7);
  assert.equal(a, 6);  // 110,111 ⇒ 110
  var a = bit.getAs(6, 5);
  assert.equal(a, 4);  // 110,101 ⇒ 100
}
testGetAs();


// Set bits at specified index.
function testSet() {
  var a = bit.set(6, 0, 1);
  assert.equal(a, 7);  // 110,0,1 ⇒ 111
  var a = bit.set(6, 2, 1);
  assert.equal(a, 6);  // 110,2,1 ⇒ 110
  var a = bit.set(6, 2, 0);
  assert.equal(a, 2);  // 110,2,0 ⇒ 010
}
testSet();


// Set bits as per mask.
function testSetAs() {
  var a = bit.setAs(8, 2, 1);
  assert.equal(a, 10);  // 0x8 set 0x2 ⇒ 0xA
  var a = bit.setAs(15, 3, 0);
  assert.equal(a, 12);  // 0xF clear 0x3 ⇒ 0xC
  var a = bit.setAs(0x1234, 0x430, 1);
  assert.equal(a, 5684);  // 0x1234 set 0x430 ⇒ 0x1634
}
testSetAs();


// Toggle bits at specified index.
function testToggle() {
  var a = bit.toggle(6, 0);
  assert.equal(a, 7);  // 110,0 ⇒ 111
  var a = bit.toggle(6, 1);
  assert.equal(a, 4);  // 110,1 ⇒ 100
  var a = bit.toggle(6, 2);
  assert.equal(a, 2);  // 110,2 ⇒ 010
}
testToggle();


// Toggle bits as per mask.
function testToggleAs() {
  var a = bit.toggleAs(6, 1);
  assert.equal(a, 7);  // 110,000 ⇒ 111
  var a = bit.toggleAs(6, 7);
  assert.equal(a, 1);  // 110,111 ⇒ 001
  var a = bit.toggleAs(6, 3);
  assert.equal(a, 5);  // 110,011 ⇒ 101
}
testToggleAs();


// Swap bit sequences at specified indices.
function testSwap() {
  var a = bit.swap(6, 1, 0);
  assert.equal(a, 5);  // 110 ⇒ 101
  var a = bit.swap(0x1234, 8, 4, 4);
  assert.equal(a, 4900);  // 0x1234 ⇒ 0x1324
  var a = bit.swap(0x4AAB, 8, 0, 8);
  assert.equal(a, 43850);  // 0x4AAB ⇒ 0xAB4A
}
testSwap();


// Find index of first set bit from LSB.
function testScan() {
  var a = bit.scan(7);
  assert.equal(a, 0);  // 111 ⇒ 0
  var a = bit.scan(12);
  assert.equal(a, 2);  // 1100 ⇒ 2
  var a = bit.scan(64);
  assert.equal(a, 6);  // 1000000 ⇒ 6
}
testScan();


// Find index of first set bit from MSB.
function testScanReverse() {
  var a = bit.scanReverse(13);
  assert.equal(a, 3);  // 1101 ⇒ 3
  var a = bit.scanReverse(5);
  assert.equal(a, 2);  // 101 ⇒ 2
  var a = bit.scanReverse(1);
  assert.equal(a, 0);  // 1 ⇒ 0
}
testScanReverse();


// Count bits set.
function testCount() {
  var a = bit.count(7);
  assert.equal(a, 3);  // 111 ⇒ 3
  var a = bit.count(12);
  assert.equal(a, 2);  // 1100 ⇒ 2
  var a = bit.count(63);
  assert.equal(a, 6);  // 111111 ⇒ 6
}
testCount();


// Calculate n-bit parity.
function testParity() {
  var a = bit.parity(7);
  assert.equal(a, 1);  // 1,1,1 ⇒ 1
  var a = bit.parity(5);
  assert.equal(a, 0);  // 1,0,1 ⇒ 0
  var a = bit.parity(8, 2);
  assert.equal(a, 2);  // 10,00 ⇒ 10
  var a = bit.parity(63, 4);
  assert.equal(a, 12);  // 11,1111 ⇒ 1100
}
testParity();


// Rotate bits by a certain amount.
function testRotate() {
  var a = bit.rotate(0x11112222, 4);
  assert.equal(a, 286401057);  // 0x11122221
  var a = bit.rotate(0x11112222, -4);
  assert.equal(a, 554766882);  // 0x21111222
}
testRotate();


// Reverse all bits.
function testReverse() {
  var a = bit.reverse(0xFFFF0000);
  assert.equal(a, 65535);  // 0x0000FFFF
  var a = bit.reverse(0x00AABBCC);
  assert.equal(a, 870143232);  // 0x33DD5500
  var a = bit.reverse(0x1234);
  assert.equal(a, 742916096);  // 0x2C480000
}
testReverse();


// Merge bits as per mask.
function testMerge() {
  var a = bit.merge(0x12, 0x24, 0x0F);
  assert.equal(a, 20);  // 0x14
  var a = bit.merge(0x1234, 0xABCD, 0x0F0F);
  assert.equal(a, 6973);  // 0x1B3D
  var a = bit.merge(0xAAAA, 0xBBBB, 0x3333);
  assert.equal(a, 48059);  // 0xBBBB
}
testMerge();


// Interleave bits of two int16s.
function testInterleave() {
  var a = bit.interleave(0x0000, 0xFFFF);
  assert.equal(a, 1431655765);  // 0x55555555
  var a = bit.interleave(0x1234, 0x1234);
  assert.equal(a, 51121968);  // 0x030C0F30
  var a = bit.interleave(0x1234, 0x4321);
  assert.equal(a, 302845473);  // 0x120D0E21
}
testInterleave();


// Sign extend variable bit-width integer.
function testSignExtend() {
  var a = bit.signExtend(15, 4);
  assert.equal(a, -1);  // 1111 ⇒ -1
  var a = bit.signExtend(3, 3);
  assert.equal(a, 3);  // 011 ⇒ 3
  var a = bit.signExtend(4, 3);
  assert.equal(a, -4);  // 100 ⇒ -4
}
testSignExtend();
