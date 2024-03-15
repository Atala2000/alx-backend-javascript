export default function getListStudentsIds(object) {
  if (!Array.isArray(object)) {
    return [];
  }
  return object.map((object) => object.id);
}
