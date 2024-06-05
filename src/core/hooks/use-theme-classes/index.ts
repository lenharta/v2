import clsx from 'clsx';
import React from 'react';
import { mergeProps } from '@/utils';

interface useThemeClassesConfig<T extends Record<string, any>> {
  props: T;
  context: T | null;
  defaultProps: T;
  className?: string | undefined;
  prefix: string;
}

function useThemeClasses<T extends Record<string, any>, K extends keyof T>(
  config: useThemeClassesConfig<T>
) {
  const { prefix, className, context, props, defaultProps } = config;

  const mergedProps = mergeProps({ props, context, defaultProps });

  const cx = React.useMemo(
    () =>
      (Object.keys(mergedProps) as K[]).reduce(
        (prev, curr) => ({
          ...prev,
          ...(mergedProps[curr]
            ? {
                [`${prefix}--${curr.toString()}-${mergedProps[curr]}`]:
                  mergedProps[curr] !== undefined,
              }
            : {}),
        }),
        {}
      ),
    [context, props]
  );

  return clsx(prefix, cx, className);
}

export { useThemeClasses };
