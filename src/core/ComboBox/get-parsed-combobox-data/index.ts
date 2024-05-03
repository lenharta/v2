// export interface ComboboxItem {
//   value: string | number;
//   label?: string | undefined;
//   disabled?: boolean | undefined;
// }

// export interface ComboboxItemParsed {
//   value: string;
//   label: string;
//   disabled?: boolean;
// }

// export interface ComboboxItemGroup<T = ComboboxItem | string> {
//   group: string;
//   items: T[];
// }

// export interface ComboboxItemGroupParsed<T = ComboboxItemParsed> {
//   group: string;
//   items: T[];
// }

// export function getParsedComboboxItem(
//   item: string | ComboboxItem | ComboboxItemGroup
// ): ComboboxItemParsed | ComboboxItemGroupParsed {
//   if (typeof item === 'string') {
//     return {
//       label: item,
//       value: item,
//     };
//   }

//   if ('value' in item && !('label' in item)) {
//     return {
//       label: (item.value as number).toString(),
//       value: (item.value as number).toString(),
//       disabled: item.disabled,
//     };
//   }

//   if (typeof item === 'number') {
//     return {
//       label: (item as number).toString(),
//       value: (item as number).toString(),
//     };
//   }

//   if ('group' in item) {
//     return {
//       group: item.group,
//       items: item.items.map(getParsedComboboxItem),
//     };
//   }

//   return item;
// }

// // export interface ComboboxItem {
// //   value: string;
// //   label?: string | undefined;
// //   disabled?: boolean | undefined;
// // }

// // export interface ParsedComboboxItem {
// //   value: string;
// //   label: string;
// //   disabled?: boolean | undefined;
// // }

// // export interface ComboboxItemGroup {
// //   group: string;
// //   items: (string | ComboboxItem | ComboboxItemGroup)[];
// // }

// // export interface ParsedComboboxItemGroup {
// //   group: string;
// //   items: (ParsedComboboxItem | ParsedComboboxItemGroup)[];
// // }

// // export function getParsedComboboxItem(item: string | ComboboxItem | ComboboxItemGroup): ParsedComboboxItem | ParsedComboboxItemGroup {

// //   if (typeof item === 'string') {
// //     return {
// //       label: item,
// //       value: item,
// //     }
// //   }

// //   if (typeof item === 'number') {
// //     return {
// //       label: (item as number).toString(),
// //       value: (item as number).toString(),
// //     }
// //   }

// //   if ('value' in item && !('label' in item)) {
// //     return {
// //       label: item.value,
// //       value: item.value,
// //       disabled: item.disabled,
// //     }
// //   }

// //   if ('group' in item) {
// //     return {
// //       group: item.group,
// //       items: item.items.map((i) => getParsedComboboxItem(i)),
// //     }
// //   }

// //   return item;
// // }

// // export function getParsedComboboxData() {}
