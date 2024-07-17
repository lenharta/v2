import { Factory } from '@types';
import { createFactory } from '@factory';
import { Icon, IconProps } from '@core';
import { CheckboxIndicatorProps, CheckboxProps, CheckboxShape, CheckboxState } from '../types';

type CheckboxIndicatorFactory = Factory.Config<{
  ref: SVGSVGElement;
  props: CheckboxIndicatorProps;
  comp: 'svg';
}>;

function parseCheckboxState(props: Partial<CheckboxProps>): CheckboxState {
  if (!!props.checked && !props.mixed) return 'checked';
  if (!!props.checked && !!props.mixed) return 'mixed';
  return 'unchecked';
}

function parseCheckboxIconName(state: CheckboxState, shape: CheckboxShape) {
  return { name: ['checkbox', state, shape].join('-') as IconProps['name'] };
}

const CheckboxIndicator = createFactory<CheckboxIndicatorFactory>((props, ref) => {
  const { checked, icon, mixed, shape = 'square', ...otherProps } = props;
  const { type = 'outline', ...iconProps } = icon || {};
  const state = parseCheckboxState({ checked, mixed });
  return (
    <Icon
      ref={ref}
      type={type}
      {...parseCheckboxIconName(state, shape)}
      {...otherProps}
      {...iconProps}
    />
  );
});

CheckboxIndicator.displayName = '@v2/Checkbox.Indicator';
export { CheckboxIndicator };
