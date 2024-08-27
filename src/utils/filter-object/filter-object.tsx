function filterObject<T extends Record<string, any>, K extends keyof T>(obj: T, key: K) {
  return obj[key] ? obj : {};
}

export { filterObject };
