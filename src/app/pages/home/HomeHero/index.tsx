import gsap from 'gsap';
import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { Subtitle, Title } from '@/common';

export const HomeHero = () => {
  const timelineRef = React.useRef<gsap.core.Timeline>();
  const scopeRef = React.useRef<HTMLDivElement>(null);

  const motion = {
    from: { opacity: 0, ease: 'sine.inOut', duration: 0.4 },
    to: { opacity: 1, ease: 'sine.inOut' },
  };

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .from('.underlay-bottom', { x: '-100%', skewX: '45deg', ...motion.from }, '<')
        .from('.underlay-top', { x: '100%', skewX: '45deg', ...motion.from }, '>')
        .from('.subtitle', { y: '-100%', ...motion.from }, '<')
        .from('.title', { x: '-100%', ...motion.from }, '<');
    },
    { scope: scopeRef }
  );

  return (
    <div className="page-hero home-hero" ref={scopeRef}>
      <div className="inner">
        <Subtitle h2 fz={9} children="Andrew Lenhart" />
        <Title h1 fz={11} children="Software Engineer" />
      </div>
      <div className="underlay-top" />
      <div className="underlay-bottom" />
    </div>
  );
};
