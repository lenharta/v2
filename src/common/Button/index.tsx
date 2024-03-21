import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ButtonGroup } from './Group';
import { UnstyledButton } from './Unstyled';
import { ButtonComponent, ButtonComponentRender, ButtonProps } from './types';

const defaultProps: Partial<ButtonProps> = {
  size: 'sm',
};

const ButtonRender: ButtonComponentRender = (props, ref) => {
  const {
    id,
    loading,
    disabled,
    className,
    excludeTabOrder,
    children,
    leftContent,
    rightContent,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const isLoading = loading !== undefined;
  const isDisabled = disabled !== undefined;
  const isFocusable = !isDisabled && !excludeTabOrder;

  const hasValidLabel = typeof children === 'string' ? children : undefined;
  const hasLeftContent = leftContent !== undefined ? leftContent : undefined;
  const hasRightContent = rightContent !== undefined ? rightContent : undefined;

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      role="button"
      tabIndex={isFocusable ? 0 : -1}
      className={clsx('button', className)}
      data-loading={isLoading ? true : undefined}
      data-disabled={isDisabled ? true : undefined}
      aria-disabled={isDisabled ? true : undefined}
      aria-label={hasValidLabel || otherProps['aria-label']}
      aria-busy={isLoading ? true : undefined}
    >
      {isLoading ? (
        <Button.Loader />
      ) : (
        <span className="inner">
          <Button.Content position="left">{hasLeftContent}</Button.Content>
          {children && <div>{children}</div>}
          <Button.Content position="right">{hasRightContent}</Button.Content>
        </span>
      )}
    </UnstyledButton>
  );
};

export const Button = React.forwardRef(ButtonRender) as ButtonComponent;

Button.Content = ({ position = 'left', children }) => {
  if (!children) return null;
  return <div data-position={position}>{children}</div>;
};

Button.Loader = ({}) => {
  return <p className="button-loader" children="Loading..." />;
};

Button.displayName = '@v2/Button';
Button.Group = ButtonGroup;
