import clsx from 'clsx';
import { Core } from '@/types';
import { Group } from '@/core';
import { PolymorphicComponent } from '@/factory';

export type ChipGroupFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.ChipGroupProps;
  element: 'div';
}>;

export const ChipGroup = PolymorphicComponent<ChipGroupFactory>(
  ({ gap, children, className, orientation, component = 'div', ...props }, ref) => {
    return (
      <Group
        {...props}
        className={clsx('v2-chip-group', className)}
        orientation={orientation}
        component={component}
        gap={gap}
        ref={ref}
      >
        {children}
      </Group>
    );
  }
);

ChipGroup.displayName = '@v2/Chip.Group';

// type ChipGroupFactory = Factory.Config<{
//   ref: HTMLDivElement;
//   comp: 'div';
//   omits: 'size' | 'variant' | 'onChange';
//   props: ChipGroupProps;
// }>;

// const ChipGroup = createFactory<ChipGroupFactory>((props, ref) => {
//   const {
//     gap,
//     size,
//     value,
//     variant,
//     loading,
//     readOnly,
//     disabled,
//     orientation,
//     className,
//     onChange,
//     children,
//     ...forwardedProps
//   } = props;

//   return (
//     <Group
//       ref={ref}
//       gap={gap}
//       orientation={orientation}
//       className={clsx('v2-chip-group', className)}
//       {...forwardedProps}
//     >
//       <ChipGroupProvider value={{ size, variant, value, loading, readOnly, disabled, onChange }}>
//         {children}
//       </ChipGroupProvider>
//     </Group>
//   );
// });

// ChipGroup.displayName = '@v2/Chip.Group';
// export { ChipGroup };
