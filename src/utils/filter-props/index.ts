export function filterProps<T extends Record<string, any>, K extends keyof T>(
  props: T
): Required<T> {
  return (Object.keys(props) as K[]).reduce((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as Required<T>);
}
