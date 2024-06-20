import React from 'react';
import { SectionProps } from './Section.types';

const Section: React.FC<SectionProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div {...forwardedProps}>
      <span>Section</span>
    </div>
  );
};

Section.displayName = '@v2/Section';
export { Section };
