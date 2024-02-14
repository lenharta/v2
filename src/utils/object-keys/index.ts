export function keys<T extends Record<string, any>, K extends keyof T>(obj: T): K[] {
  return Object.keys(obj as T) as K[];
}
