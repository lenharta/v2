export function filterEmptyObj<T>(obj: T) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}
