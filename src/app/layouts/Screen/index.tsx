import { Core } from '@/types/core';
import { ScreenContent } from './Content';

export type ScreenProps = {};

export type ScreenFactory = Core.BaseFactory<{
  props: ScreenProps;
  component: 'div';
  components: {
    Content: typeof ScreenContent;
  };
}>;

export const Screen: ScreenFactory = (props) => {
  const { children, component: Component = 'div', ...otherProps } = props;
  return <Component {...otherProps}>{children}</Component>;
};

Screen.displayName = '@v2/Screen';
Screen.Content = ScreenContent;
