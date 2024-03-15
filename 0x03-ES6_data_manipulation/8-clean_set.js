export default function cleanSet(Set, startString) {
  const result = [...Set].filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
  return result;
}
