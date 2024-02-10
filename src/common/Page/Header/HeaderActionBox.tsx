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
      <Link
        to="/"
        className="avatar"
        data-accent-color-text={state.accent}
        data-accent-color-border={state.accent}
        data-int-accent-color-bkgd={state.accent}
      >
        <Icon name={state.avatar} />
      </Link>
    </Component>
  );
});
