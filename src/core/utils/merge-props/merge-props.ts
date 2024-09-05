export function mergeProps<T extends Record<string, any>>(...props: (T | Partial<T>)[]) {
  if (!props[0] || props[0] === null) return {} as T;

  let result = { ...props[0] };

  for (let i = 0; i <= props.length; i++) {
    let item = props[i];

    for (const key in item) {
      if (item && item[key]) {
        result = { ...result, ...{ [key]: item[key] } };
      }
    }
  }

  // for (const key in props) {
  //   let a = props[key];
  //   let b = source[key];
  //   let c = context?.[key];
  //   result[key] = a || b || c;
  // }

  return result;
}

//   return result;

//   // return (Object.keys(props) as (keyof T)[]).reduce(
//   //   (prev, key) => ({
//   //     ...prev,
//   //     ...{ [key]: props?.[key] || context?.[key] || defaultProps[key] },
//   //   }),
//   //   {} as Omit<
//   //     {
//   //       [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
//   //     },
//   //     keyof typeof defaultProps
//   //   > &
//   //     T
//   // );
// }

function isObject(item: unknown) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function deepMerge<T extends object>(target: T, source: any): T {
  const result: Record<string, any> = { ...target };
  const _source: Record<string, any> = source;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }

  return result as T;
}
