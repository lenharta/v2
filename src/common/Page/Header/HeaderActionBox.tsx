import { Icon } from '@/common';
import { Factory, createFactory } from '@/factory';
import { useThemeCTX } from '@/store';

export type HeaderActionBoxProps = {};

export type HeaderActionBoxFactory = Factory.Config<{
  props: HeaderActionBoxProps;
  component: 'div';
}>;

export const HeaderActionBox = createFactory<HeaderActionBoxFactory>((props) => {
  const { component: Component = 'div', ...otherProps } = props;
  const { state } = useThemeCTX();
  return (
    <Component {...otherProps} className="page-header-action-box">
      <div className="page-header-action-avatar">
        <Icon name={state.avatar} className="page-header-action-avatar-icon" />
      </div>
    </Component>
  );
});
