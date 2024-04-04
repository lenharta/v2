import { FocusProps } from '@/types';
import React from 'react';

export function useFocusIndex(props: FocusProps) {
  return React.useMemo(() => {
    if (props.tabIndex) {
      return { tabIndex: props.tabIndex };
    }
    if (props.disabled && !props.allowDisabledFocus) {
      return { tabIndex: undefined };
    }
    if (props.disabled && props.allowDisabledFocus) {
      return { tabIndex: props.excludeTabOrder ? -1 : 0 };
    }
    if (!props.disabled && props.excludeTabOrder) {
      return { tabIndex: -1 };
    }
    return { tabIndex: 0 };
  }, [props]);
}
