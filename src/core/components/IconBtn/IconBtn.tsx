import clsx from 'clsx';
import { Factory } from '@types';
import { createFactory } from '@factory';

import { Icon } from '../Icon/Icon';
import { IconBtnProps } from './types';
import { UnstyledButton } from '../UnstyledButton';

type IconBtnFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: IconBtnProps;
}>;

const IconBtn = createFactory<IconBtnFactory>((props, ref) => {
  const { icon, size = 'sm', variant = 'default', className, ...forwardedProps } = props;
  return (
    <UnstyledButton
      ref={ref}
      className={clsx('v2-iconbtn', `v2-iconbtn--${size}`, `v2-iconbtn--${variant}`, className)}
      {...forwardedProps}
    >
      <Icon {...icon} />
    </UnstyledButton>
  );
});

IconBtn.displayName = '@v2/IconBtn';
export { IconBtn };
