import { ElementProps } from '@/types';

export interface ScreenProps extends ElementProps<'nav'> {}

export const Screen = (props: ScreenProps) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} className="screen-layout">
      <div className="screen-content">
        <span>Screen Content</span>
      </div>
    </div>
  );
};
