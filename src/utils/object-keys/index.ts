export function objectKeys<T extends Record<string, any>, K extends keyof T>(props: T): K[] {
  return Object.keys(props) as K[];
}
