import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { RadioGroupProps } from '../Radio.types';
import { RadioGroupProvider } from '../Radio.context';

type RadioGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: RadioGroupProps;
}>;

const RadioGroup = factory<RadioGroupFactory>((props, ref) => {
  const { className, children, orientation = 'vertical', ...forwardedProps } = props;
  return (
    <div {...forwardedProps} className={clsx('v2-radio-group', className)} ref={ref}>
      <RadioGroupProvider value={{ orientation }}>
        <React.Fragment>{children}</React.Fragment>
      </RadioGroupProvider>
    </div>
  );
});

RadioGroup.displayName = '@v2/Radio.Group';
export { RadioGroup };
