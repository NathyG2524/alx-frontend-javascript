export default function createInt8TypedArray(length, position, value) {
  const typedArray = new Int8Array(length);
  if (position > length) {
    console.error('Position outside range');
  }

  typedArray[position] = value;

  const dv = new DataView(typedArray.buffer);
  return dv;
}
