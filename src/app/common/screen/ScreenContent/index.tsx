import { factory } from '@/core/factory';
import { Factory } from '@/types';

export interface ScreenContentProps {
  children?: React.ReactNode | undefined;
}

export type ScreenContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenContentProps;
}>;

export const ScreenContent = factory<ScreenContentFactory>((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref} className="screen-content">
      {children}
    </div>
  );
});

ScreenContent.displayName = '@v2/app/Screen.Content';
