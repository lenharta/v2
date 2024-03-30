import { ElementProps } from '@/types';

interface FooterProps extends Omit<ElementProps<'footer'>, 'children'> {}

export const Footer = (props: FooterProps) => {
  const { ...otherProps } = props;
  return (
    <footer {...otherProps} className="footer-layout">
      <div className="footer-content">
        <div className="footer-content--left">
          <span>Content Left</span>
        </div>
        <div className="footer-content--right">
          <span>Content Right</span>
        </div>
      </div>
    </footer>
  );
};
