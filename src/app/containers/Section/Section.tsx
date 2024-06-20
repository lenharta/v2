import React from 'react';
import { SectionProps } from './Section.types';

const Section: React.FC<SectionProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <section className="v2-section" {...forwardedProps}>
      {children}
    </section>
  );
};

Section.displayName = '@v2/Section';
export { Section };
