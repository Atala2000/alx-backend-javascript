export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range.');
  }

  const buffer = new ArrayBuffer(length);

  const Int8ArrayView = new Int8Array(buffer);

  Int8ArrayView[position] = value;

  return new DataView(buffer);
}
