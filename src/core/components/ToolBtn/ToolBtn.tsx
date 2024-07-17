import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';

import { Icon } from '../Icon/Icon';
import { ToolBtnProps } from './types';
import { UnstyledButton } from '../UnstyledButton';

type ToolBtnFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ToolBtnProps;
}>;

const ToolBtn = createFactory<ToolBtnFactory>((props, ref) => {
  const { icon, className, ...forwardedProps } = props;
  return (
    <UnstyledButton ref={ref} className={clsx('v2-icon-btn', className)} {...forwardedProps}>
      <Icon {...icon} />
    </UnstyledButton>
  );
});

ToolBtn.displayName = '@v2/ToolBtn';
export { ToolBtn };
