import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useInputIds } from '@/hooks';
import { UnstyledButton } from '../Button/Unstyled';
import { InlineInputText } from './InlineInputText';
import { InlineInputLabel } from './InlineInputLabel';
import { createSurfaceToken, createTokenStyle } from '../tokens';
import { InlineInputComponent, InlineInputProps, InlineInputRenderType } from './types';

const defaultProps: Partial<InlineInputProps> = {
  surface: { type: 'primary', state: 'interactive', level: 0 },
  size: 'md',
};

const InlineInputRender: InlineInputRenderType = (props, ref) => {
  const {
    id,
    size,
    surface,
    label,
    className,
    disabled,
    elevated,
    children,
    style,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const ids = useInputIds(id, ['label', 'text']);

  const isDisabled = disabled !== undefined ? true : undefined;
  const isElevated = elevated !== undefined ? true : undefined;

  const hasSize = !size ? undefined : size;
  const hasSurfaceState = !isDisabled ? surface?.state : 'disabled';
  const hasSurfaceLevel = isDisabled ? 0 : isElevated ? 1 : surface?.level;

  const styles = React.useMemo(
    () => ({
      ...style,
      ...createTokenStyle({
        key: 'inline-input-height',
        prop: 'height',
        value: hasSize,
      }),
    }),
    [style, size]
  );

  const clxss = React.useMemo(
    () =>
      clsx(
        'inline-input',
        createSurfaceToken({
          type: surface?.type,
          level: hasSurfaceLevel,
          state: hasSurfaceState,
        }),
        className
      ),
    [surface, elevated, disabled, className]
  );

  return (
    <UnstyledButton {...otherProps} ref={ref} className={clxss} style={styles}>
      {children}
      <span className="inner">
        <InlineInput.Label htmlFor={ids.label} label={label} />
        <InlineInput.Text id={ids.text} />
      </span>
    </UnstyledButton>
  );
};

export const InlineInput = React.forwardRef(InlineInputRender) as InlineInputComponent;
InlineInput.displayName = '@v2/InlineInput';
InlineInput.Label = InlineInputLabel;
InlineInput.Text = InlineInputText;
