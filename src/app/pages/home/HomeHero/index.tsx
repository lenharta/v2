import gsap from 'gsap';
import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { Subtitle, Title } from '@/common';

export const HomeHero = () => {
  const timelineRef = React.useRef<gsap.core.Timeline>();
  const scopeRef = React.useRef<HTMLDivElement>(null);

  const common = {
    ease: 'sine.inOut',
    duration: 0.5,
    opacity: 0,
    scaleX: 0,
  };

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .from('.page-hero-home-underlay--top', { x: '100%', skewX: '45deg', ...common }, '<')
        .from('.page-hero-home-underlay--bottom', { x: '-100%', skewX: '-45deg', ...common }, '>')
        .from('.subtitle', { y: '-100%', ...common }, '<')
        .from('.title', { x: '-100%', ...common }, '<');
    },
    { scope: scopeRef, revertOnUpdate: true }
  );

  return (
    <div className="page-hero-home" ref={scopeRef}>
      <div className="page-hero-home-inner">
        <Subtitle h2 children="Andrew Lenhart" />
        <Title h1 children="Software Engineer" />
      </div>
      <div className="page-hero-home-underlay--top" />
      <div className="page-hero-home-underlay--bottom" />
    </div>
  );
};
