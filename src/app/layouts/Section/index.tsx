import * as React from 'react';

interface SectionProps {
  children?: React.ReactNode | undefined;
}

const Section: React.FC<SectionProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <section className="v2-layout-section" {...forwardedProps}>
      {children}
    </section>
  );
};

Section.displayName = '@v2/Layout.Section';
export { Section };
