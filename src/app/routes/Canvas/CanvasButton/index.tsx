import * as React from 'react';
import { Page } from '@/app';
import { Button, ButtonProps } from '@/core';

const CanvasButtonDefault = (props: ButtonProps) => {
  return <Button {...props} />;
};

// const CanvasButtonGroup =

// // const CanvasModeController = () => {}

// // function useCanvasState<T extends Record<string, any>>(props: T) {
// //   const [state, setState] = React.useState(props);

// //   const update = React.useCallback(
// //     <K extends keyof T>(key: K, value: T[K]) => {
// //       setState((current) => ({ ...current, [key]: value }));
// //     },
// //     [props]
// //   );

// //   return {state,  update };
// // }

// type CanvasSelectGroup<T> = {
//   label: string;
//   value: T;
// };

// type CanvasSelectOption<T> = {
//   group: CanvasSelectGroup<T>;
//   label: string;
//   value: T;
// };

// function CanvasSelect<T extends string>(props: CanvasSelectOption<T>) {
//   const { group, value, label } = props;
//   return (
//     <select>
//       <option></option>
//       <option></option>
//       <option></option>
//       <option></option>
//     </select>
//   );
// }

// type CanvasItem<T, V> = {
//   type: T;
//   value: V;
//   label: string;
// };

// type CanvasOption<T, V> = {
//   options: V[];
// };

// interface CanvasConfigGroup<T> {
//   type?: 'control' | 'toggle' | 'text' | 'number' | undefined;
//   item: { value: T; label: string };
//   options: T[];
// }

// function useCanvas<T>(config: CanvasConfigItem<T>) {
//   return {};
// }

// const CanvasButton: React.FC<{}> = ({}) => {
//   const {} = useCanvasState<Partial<ButtonProps>>({
//     variant: 'default',
//   });
//   return (
//     <Page.Section>
//       <Button />
//     </Page.Section>
//   );
// };
