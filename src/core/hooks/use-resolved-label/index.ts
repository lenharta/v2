import * as React from 'react';
import { Core } from '@/types';
import { getResolvedLabel } from '@/core/utils';

export const useResolvedLabel = (props: Core.AriaLabelProps) => {
  return React.useMemo(() => getResolvedLabel(props), [props]);
};
