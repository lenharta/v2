import { AriaLabelProps } from '@/types';

type ParseLabel = (value: string | number | readonly string[] | undefined) => React.AriaAttributes;
type GetAriaLabel = (props: AriaLabelProps) => React.AriaAttributes;

const parseLabel: ParseLabel = (value) => {
  const clean = (v: string) => v.trim().toLowerCase();

  if (value && !Array.isArray(value)) {
    return { 'aria-label': clean(value.toString()) };
  }
  if (value && Array.isArray(value)) {
    return { 'aria-label': clean(value.join(' ')) };
  }
  return {};
};

export const getAriaLabel: GetAriaLabel = (props) => {
  if (props.ariaLabel) {
    return parseLabel(props.ariaLabel);
  }
  if (props.label) {
    return parseLabel(props.label);
  }
  if (typeof props.children === 'string') {
    return parseLabel(props.children);
  }
  if (props.value) {
    return parseLabel(props.value);
  }
  return {} as React.AriaAttributes;
};
