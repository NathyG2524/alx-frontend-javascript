export default function appendToEachArrayValue(array, appendString) {
  const arry2 = [];
  for (const idx of array) {
    arry2.push(`${appendString}${idx}`);
  }

  return arry2;
}
