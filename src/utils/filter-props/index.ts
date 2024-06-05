import { filterObject } from '../filter-object';

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

// type FilterPropsReturn<T extends Record<string, any>> = {
//   [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
// };

// function filterProps<T extends Record<string, any>>(props: T): FilterPropsReturn<T> {
//   return Object.keys(props).reduce((acc, key: keyof T) => {
//     if (props[key] !== undefined) {
//       acc[key] = props[key];
//     }
//     return acc;
//   }, {} as FilterPropsReturn<T>);
// }

// export { filterProps };
