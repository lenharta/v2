import { AriaLabelProps } from '@/types';

export function getAriaLabel(props: AriaLabelProps) {
  if (!!props.ariaLabel) {
    return { 'aria-label': props.ariaLabel };
  }
  if (!!props.label) {
    return { 'aria-label': props.label };
  }
  if (typeof props.children === 'string') {
    return { 'aria-label': props.children };
  }
  if (!!props.value) {
    return { 'aria-label': props.value };
  }
  return {};
}
