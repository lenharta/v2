import clsx from 'clsx';
import { Factory } from '@/types';
import { createFactory } from '@/factory';

import { Icon } from '../Icon/Icon';
import { IconBtnProps } from './types';
import { UnstyledButton } from '../UnstyledButton';

type IconBtnFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: IconBtnProps;
}>;

const IconBtn = createFactory<IconBtnFactory>((props, ref) => {
  const { icon, className, ...forwardedProps } = props;
  return (
    <UnstyledButton ref={ref} className={clsx('v2-icon-btn', className)} {...forwardedProps}>
      <Icon {...icon} />
    </UnstyledButton>
  );
});

IconBtn.displayName = '@v2/IconBtn';
export { IconBtn };
