import clsx from 'clsx';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface HeaderProps extends Core.BaseProps {
  scheme?: 'primary' | 'secondary' | undefined;
}

export type HeaderFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'header';
  props: HeaderProps;
}>;

export const Header = factory<HeaderFactory>((props, ref) => {
  const { scheme = 'primary', children, className, ...otherProps } = props;
  return (
    <header
      {...otherProps}
      className={clsx('header-layout', className)}
      data-scheme={scheme}
      ref={ref}
    >
      <div className="header-content">
        <div className="header-box--left">
          <span>Header Box (left)</span>
        </div>
        <div className="header-box--right">
          <span>Header Box (right)</span>
        </div>
      </div>
    </header>
  );
});

Header.displayName = '@v2/site/Header';
