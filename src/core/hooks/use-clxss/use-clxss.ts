export {};

// const SETTINGS = { isPrefix: true, rootKey: 'root', prefix: 'v2-' };
// function getAutoPrefix(prefix: string): Core.PrefixFunction {
//   return (suffix) => {
//     if (suffix.includes(prefix)) return suffix;
//     return [prefix, suffix].join('');
//   };
// }

// const getClassKeys = <K extends string>(o: Core.ClassNames<K>): K[] => Object.keys(o) as K[];

// const parseClassOptions = (opts: Partial<Core.ClassOptions>): Core.ClassOptions => ({
//   prefix: opts.prefix || SETTINGS.prefix,
//   rootKey: opts.rootKey || SETTINGS.rootKey,
//   isPrefix: opts.isPrefix || SETTINGS.isPrefix,
//   prefixer: opts.prefixer || getAutoPrefix(opts.prefix || SETTINGS.prefix),
// });

// // const parseClassName = (...payload: (string | undefined)[]) => {
// //   return clsx(
// //     payload.map((clxss) => {
// //       if (!clxss) return;

// //       if (Array.isArray(clxss)) {
// //         if (!opts.prefix || clxss.includes(opts.prefix)) return clxss;
// //       }

// //       if (!clxss.includes)
// //         if (clxss !== undefined && !clxss.includes(opts.prefix)) {
// //           return !opts.isPrefix ? clxss : opts.prefixer(clxss);
// //         }
// //       return;
// //     })
// //   );
// // };

// // 'button button--default button--sm'

// const parseClassPayload: typeof Core.parseClassPayload = (payload, options) => {
//   if (!payload) return;

//   const result: string[] = [];

//   const classList: string[] = payload.split(' ');

//   if (!!(options.prefix && options.prefixer)) {
//     for (const c in classList) {
//       if (c.includes(options.prefix)) {
//         result.push(c);
//       }
//       result.push(options.prefixer(c));
//     }
//     return result.join(' ');
//   }

//   for (const c in classList) {
//     result.push(c);
//   }
//   return result.join(' ');
// };

// const parseClassPayloadPrefixed = (payload: string | undefined, prefixer: Core.PrefixFunction) => {
//   if (!payload) return;

//   const items: string[] = payload.split(' ');
//   const result: string[] = [];

//   for (const item in items) {
//     result.push(prefixer(item));
//   }
//   return result.join(' ');
// };

// const parseClassNamePayload = <T extends string | undefined>(options: Core.ClassOptions) => {
//   return (...classList: T[]) => {
//     const result: string[] = [];

//     if (options.isPrefix) {
//       for (const c in classList) {
//         if (c !== undefined && !c.includes(options.prefix)) {
//           result.push(options.prefixer(c));
//         }
//       }
//       return result;
//     }

//     for (const c in classList) {
//       if (c !== undefined) {
//         result.push(c);
//       }
//     }
//     return result;
//   };
// };

// const resolveClassNames: typeof Core.resolveClassNames = (config, props, opts) => {
//   return getClassKeys(config).reduce(
//     (prev, key) => ({
//       ...prev,
//       [key]: clsx(
//         props.classNames?.[key] || config[key],
//         key === opts.rootKey ? props.className : undefined
//       ),
//     }),
//     config
//   );
// };

// export const useClassNames = <K extends string>(
//   config: Core.ClassNames<K>,
//   props: Partial<Core.ClassProps<K>>
// ) => {
//   const { classNames, className, ...options } = props;

//   const opts = parseClassOptions(options);

//   return resolveClassNames(config, { className, classNames }, opts);
// };

// function useClxssMiddlewares<K extends string>(options: Core.ClxssOptions) {
//   return {
//     resolve(init: Core.Clxss<K>, classNames: Partial<Core.Clxss<K>> | undefined) {
//       return (Object.keys(init) as K[]).reduce(
//         (prev, key) => ({ ...prev, [key]: classNames?.[key] || init[key] }),
//         {} as Core.Clxss<K>
//       );
//     },

//     mergeValue(obj: Core.Clxss<K>, payload: string) {
//       return (Object.keys(obj) as K[]).reduce(
//         (prev, key) => ({ ...prev, [key]: payload }),
//         {} as Core.Clxss<K>
//       );
//     },

//     parsePayload(payload: string[]): string[] {
//       return payload.map((className) => {
//         return !options.isPrefix ? className : options.prefixer(className);
//       });
//     },
//   };
// }

// function useClassNameMiddleware<T extends Record<string, string>>(options: ClassOptions) {
//   const keys = (init: T): (keyof T)[] => {
//     return Object.keys(init) as (keyof T)[];
//   };

//   // const  = (cx: string) => {
//   //   if (cx.includes(options.prefix)) return cx;
//   //   return options.prefixer(cx);
//   // };

//   const getPrefixData = (item: string | string[]) => {
//     if (Array.isArray(item))
//       return item.map((cx) => {
//         return options.prefixer(cx);
//       });

//     return item.split(' ').map((i) => {
//       return options.prefixer(i);
//     });
//   };

//   const prefix = (item: string): string => {
//     if (options.isPrefix !== true) return item;
//     return options.prefixer(item);
//   };

//   const prefixDeep = (item: string | string[]): string => {
//     return clsx(
//       (Array.isArray(item) ? item : item.split(' ')).map((i) => {
//         return !!options.isPrefix ? options.prefixer(i) : i;
//       })
//     );
//   };

//   const append = <V extends string | string[]>(current: V, value: V) => {
//     const merge = (payload: V) => (Array.isArray(payload) ? [...payload] : [payload]);
//     return clsx();
//   };

//   const appendWhere = <V extends string | string[]>(bool: boolean, current: V, value: V) => {
//     const merge = (payload: V) => (Array.isArray(payload) ? [...payload] : [payload]);
//     return [merge(current), bool ? merge(value) : ''].join(' ').trim();
//   };

//   const apply = (init: T, item: { key: keyof T; value: string }) => {
//     return (Object.keys(init) as (keyof T)[]).reduce(
//       (prev, key) => (item.key === key ? { ...prev, [item.key]: item.value } : prev),
//       {} as T
//     );
//   };

//   const applyWhere = (bool: boolean, init: T, item: { key: keyof T; value: string }) => {
//     return (Object.keys(init) as (keyof T)[]).reduce(
//       (prev, key) =>
//         item.key === key ? { ...prev, ...(bool ? { [item.key]: item.value } : {}) } : prev,
//       {} as T
//     );
//   };

//   const resolve = (init: T, update?: Partial<T>) => {
//     return (Object.keys(init) as (keyof T)[]).reduce(
//       (prev, key) => ({ ...prev, ...{ [key]: update?.[key] || init[key] } }),
//       {} as T
//     );
//   };

//   return {
//     append,
//     appendWhere,
//     apply,
//     applyWhere,
//     prefix,
//     prefixDeep,
//     resolve,
//     keys,
//   };
// }

// export type ClassProps<T extends Core.ClassNames> = ClassOptions & {
//   classNames: Partial<T> | undefined;
//   className: string;
// };

// export function useClassNames<T extends Core.ClassNames>(init: T, props: Partial<ClassProps<T>>) {
//   const middleware = useClassNameMiddleware({
//     prefix: props.prefix || SETTINGS.prefix,
//     rootKey: props.rootKey || SETTINGS.rootKey,
//     isPrefix: props.isPrefix || SETTINGS.isPrefix,
//     prefixer: props.prefixer || getAutoPrefixer(props.prefix),
//   });

//   const resolveClassNames = () => {
//     return [];
//   };

//   const classNames = middleware.resolve(init, props.classNames);

//   return classNames;
// }

//   // const middlewares = {
//   //   keys(obj: Record<K, string>): K[] {
//   //     return Object.keys(obj) as K[];
//   //   },
//   //   applyWhere(condition: boolean, value?: string): string | undefined {
//   //     return condition === true ? value : undefined;
//   //   },
//   //   prefix(value: string): string {
//   //     const raw = value.split(' ');
//   //     return raw.map((i) => prefixer(i)).join(' ');
//   //   },
//   // };

//   // return resolveClassNames(middlewares.keys(classNames), (key) => ({
//   //   [key]: clsx(
//   //     middlewares.prefix(options.classNames?.[key] || classNames[key]),
//   //     middlewares.applyWhere(key === 'root', options.className)
//   //   ),
//   // }));

//   // return (Object.keys(classNames) as K[]).reduce(
//   //   (prev, key) => ({
//   //     ...prev,
//   //     ...
//   //     // ...{
//   //     //   [key]: clsx(
//   //     //     middlewares.prefix(options.classNames?.[key] || classNames[key]),
//   //     //     middlewares.applyWhere(key === 'root', options.className)
//   //     //   ),
//   //     // },
//   //   }),
//   //   {} as Core.ClassNames<K>
//   // );
// }
