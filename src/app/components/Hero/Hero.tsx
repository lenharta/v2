import * as React from 'react';
import { HeroProps } from './Hero.types';

const Hero: React.FC<HeroProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <div className="v2-hero" role="presentation" {...forwardedProps}>
      <div className="v2-hero-inner">{children}</div>
    </div>
  );
};

Hero.displayName = '@v2/Hero';
export { Hero };
