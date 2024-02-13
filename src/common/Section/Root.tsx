import clsx from 'clsx';
import { SectionRootComponent } from '@/types';
import { SectionContainer } from './Container';
import { SectionContent } from './Content';
import { SectionHeader } from './Header';

export const Section: SectionRootComponent = (props) => {
  const { children, className, component: Component = 'section', ...otherProps } = props;
  const clxss = clsx('Section', className);
  return (
    <Component {...otherProps} className={clxss}>
      {children}
    </Component>
  );
};

Section.Container = SectionContainer;
Section.Content = SectionContent;
Section.Header = SectionHeader;
