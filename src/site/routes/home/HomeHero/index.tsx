import gsap from 'gsap';
import * as React from 'react';
import { Page } from '@/site/components';
import { useGSAP } from '@gsap/react';
import { Subtitle, Title } from '@/core';

export const HomeHero = () => {
  const timelineRef = React.useRef<gsap.core.Timeline>();
  const scopeRef = React.useRef<HTMLDivElement>(null);
  const common = { ease: 'sine.inOut', opacity: 0, duration: 0.5 };

  const styles = {
    titleUpper: { y: '-100%', ...common },
    titleLower: { x: '-100%', ...common },
    underlayUpper: { x: '100%', skewX: '45deg', ...common },
    underlayLower: { x: '-100%', skewX: '-45deg', ...common },
  } as const;

  const css = {
    titleUpper: 'sec-home-hero-title--upper',
    titleLower: 'sec-home-hero-title--lower',
    underlayUpper: 'sec-home-hero-underlay--upper',
    underlayLower: 'sec-home-hero-underlay--lower',
  } as const;

  const gradients = {
    underlayUpper: 'accent-bottom-left',
    underlayLower: 'accent-top-right',
  } as const;

  const formatClassName = (key: keyof typeof css) => {
    return '.' + css[key];
  };

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .from(...[formatClassName('titleUpper'), styles.titleUpper, '<'])
        .from(...[formatClassName('titleLower'), styles.titleLower, '>'])
        .from(...[formatClassName('underlayUpper'), styles.underlayUpper, '<'])
        .from(...[formatClassName('underlayLower'), styles.underlayLower, '<']);
    },
    { scope: scopeRef, revertOnUpdate: true }
  );

  return (
    <Page.Hero ref={scopeRef}>
      <div className="sec-home-hero-content">
        <Subtitle className={css.titleUpper} h2>
          Andrew Lenhart
        </Subtitle>
        <Title className={css.titleLower} h1>
          Software Engineer
        </Title>
      </div>
      <div data-gradient={gradients.underlayUpper} className={css.underlayUpper} />
      <div data-gradient={gradients.underlayLower} className={css.underlayLower} />
    </Page.Hero>
  );
};
