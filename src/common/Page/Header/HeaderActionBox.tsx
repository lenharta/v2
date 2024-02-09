import { Link } from 'react-router-dom';
import { Icon } from '@/common';
import { useThemeCTX } from '@/store';
import { Factory, createFactory } from '@/factory';

export type HeaderActionBoxProps = {};

export type HeaderActionBoxFactory = Factory.Config<{
  props: HeaderActionBoxProps;
  component: 'div';
}>;

export const HeaderActionBox = createFactory<HeaderActionBoxFactory>((props) => {
  const { component: Component = 'div', ...otherProps } = props;
  const { state } = useThemeCTX();
  return (
    <Component {...otherProps} className="action-box">
      <Link to="/" className="action-box-avatar">
        <Icon name={state.avatar} className="action-box-avatar-icon" />
      </Link>
    </Component>
  );
});
