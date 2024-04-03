import { FocusProps } from '@/types';

export function useFocusIndex(props: FocusProps) {
  const { tabIndex, disabled, excludeTabOrder, allowDisabledFocus } = props;

  if (tabIndex) {
    return { tabIndex };
  }
  if (disabled && !allowDisabledFocus) {
    return { tabIndex: undefined };
  }
  if (disabled && allowDisabledFocus) {
    return { tabIndex: excludeTabOrder ? -1 : 0 };
  }
  if (!disabled && excludeTabOrder) {
    return { tabIndex: -1 };
  }
  return { tabIndex: 0 };
}
