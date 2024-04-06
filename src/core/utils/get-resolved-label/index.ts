import { Core } from '@/types';

const parseLabel = (value: string | number | readonly string[] | undefined): string | undefined => {
  const clean = (v: string) => v.trim().toLowerCase();

  if (value && !Array.isArray(value)) {
    return clean(value.toString());
  }
  if (value && Array.isArray(value)) {
    return clean(value.join(' '));
  }
  return undefined;
};

export const getResolvedLabel = (props: Core.AriaLabelProps): string | undefined => {
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
  return undefined;
};
