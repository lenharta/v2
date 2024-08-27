import { filterObject } from '../filter-object/filter-object';

function filterProps<T extends Record<string, any>, K extends keyof T>(obj: T) {
  return (Object.keys(obj) as K[]).reduce(
    (prev, curr) => ({
      ...prev,
      ...filterObject<T, K>(obj, curr),
    }),
    {}
  );
}

export { filterProps };
