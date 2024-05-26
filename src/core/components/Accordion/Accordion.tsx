import React from 'react';
import { Box } from '../Box';
import { AccordionItem } from './Item';
import { AccordionPanel } from './Panel';
import { AccordionTarget } from './Target';
import { AccordionProvider } from './Accordion.context';
import { AccordionProps, AccordionValue } from './Accordion.types';

const Accordion = <Multiple extends boolean = false>(props: AccordionProps<Multiple>) => {
  const {
    value,
    children,
    multiple = false,
    trapFocus = false,
    chevronPosition = 'right',
    onValueChange,
  } = props;

  const uid = React.useId();
  const getRootId = () => `accordion${uid}`;
  const getPanelId = (v: string) => `accordion${uid}${v}:panel`;
  const getTargetId = (v: string) => `accordion${uid}${v}:target`;

  const isValueActive = (v: string): boolean => {
    return Array.isArray(value) ? value.includes(v) : v === value;
  };

  const handleChange = (v: string | null) => {
    const nextValue: AccordionValue<Multiple> = Array.isArray(value)
      ? multiple && v && value.includes(v)
        ? value.filter((current) => current !== v)
        : [...value, v]
      : v === value
        ? null
        : (v as any);

    onValueChange(nextValue as AccordionValue<Multiple>);
  };

  return (
    <AccordionProvider
      value={{
        trapFocus,
        chevronPosition,
        onValueChange: handleChange,
        isValueActive,
        getTargetId,
        getPanelId,
      }}
    >
      <Box id={getRootId()} data-accordion-root>
        {children}
      </Box>
    </AccordionProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
Accordion.Target = AccordionTarget;
Accordion.displayName = '@v2/Accordion';
export { Accordion };

// type AccordionFactory<Multiple extends boolean = false> = React.FC<
//   AccordionRootProps<Multiple>
// > & {
//   Item: typeof AccordionItem;
//   Panel: typeof AccordionPanel;
//   Target: typeof AccordionTarget;
// };

// const useAccordionValue = <Multiple extends boolean = false>(props: {
//   value: AccordionValue<Multiple>;
//   onValueChange: (value: AccordionValue<Multiple>) => void;
// }) => {
//   const isMultiValue = <T extends AccordionValue<Multiple>>(value: T) => {
//     return value && Array.isArray(props.value) ? true : false;
//   }

//   const isActiveValue = <T extends AccordionValue<Multiple>>(value: T) => {
//     if (value && props.value && isMultiValue(value)) {
//       return props.value.includes(value as string)
//     }
//     return props.value === value;
//   };

//   return {
//     isActiveValue,
//   }
// };

// const Accordion: AccordionFactory = (props) => {
//   const { value, onValueChange, Multiple = false, children } = props;

//   const uid = React.useId();
//   const getPanelId = (value: string) => `accordionPanel${uid}${value}`;
//   const getTargetId = (value: string) => `accordionTarget${uid}${value}`;

//   const { isActiveValue } = useAccordionValue({
//     onValueChange,
//     value,
//   })

//   // const isActiveValue = (itemValue: string) => {
//   //   const isMultiValue = value && Array.isArray(value);
//   //   return isMultiValue ? value.includes(itemValue) : value === itemValue;
//   // };

//   // const handleChange = (itemValue: string) => {
//   //   const findNextValue = () => {
//   //     if (Array.isArray(value) && value.includes(itemValue)) {
//   //       return value.filter((current) => current !== itemValue);
//   //     }
//   //     if (Array.isArray(value) && !value.includes(itemValue)) {
//   //       return [...value, itemValue];
//   //     }
//   //     if (Array.isArray(value) && value !== itemValue) {
//   //       return itemValue;
//   //     }
//   //     if (!Array.isArray(value) && value === itemValue) {
//   //       return null;
//   //     }
//   //   };
//   //   onValueChange(findNextValue());
//   // };

//   return (
//     <AccordionProvider value={{ getPanelId, getTargetId, isActiveValue, activeValue: value }}>
//       <React.Fragment>{children}</React.Fragment>
//     </AccordionProvider>
//   );
// };
