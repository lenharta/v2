import clsx from 'clsx';
import * as React from 'react';

interface PageSectionProps {
  scheme?: 'base' | 'accent' | 'contrast' | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

type PageSectionFactory = React.FC<PageSectionProps> & {};

const PageSection: PageSectionFactory = (props) => {
  const { scheme = 'base', className, children } = props;
  return (
    <div className={clsx('v2-page-section', className)} data-scheme={scheme}>
      {children}
    </div>
  );
};

PageSection.displayName = '@v2/Page.Section';
export { PageSection, type PageSectionProps, type PageSectionFactory };
