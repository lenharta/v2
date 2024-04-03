import { ElementProps } from '@/types';

interface HeaderProps extends Omit<ElementProps<'footer'>, 'children'> {}

export const Header = (props: HeaderProps) => {
  const { ...otherProps } = props;
  return (
    <footer {...otherProps} data-scheme="primary" className="header-layout">
      <div className="header-content">
        <div className="header-content--left"></div>
        <div className="header-content--right">
          <span>Content Right</span>
        </div>
      </div>
    </footer>
  );
};
