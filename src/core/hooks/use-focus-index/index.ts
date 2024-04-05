import * as React from 'react';
import { Core } from '@/types';

export function useFocusIndex(props: Core.FocusProps) {
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
