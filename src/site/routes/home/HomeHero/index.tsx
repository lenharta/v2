import gsap from 'gsap';
import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { Subtitle, Title } from '@/common';
import { Page } from '@/site/components';

export const HomeHero = () => {
  const timelineRef = React.useRef<gsap.core.Timeline>();
  const scopeRef = React.useRef<HTMLDivElement>(null);

  const common = {
    ease: 'sine.inOut',
    duration: 0.5,
    opacity: 0,
  };

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .from('.sec-home-hero-underlay--upper', { x: '100%', skewX: '45deg', ...common }, '<')
        .from('.sec-home-hero-underlay--lower', { x: '-100%', skewX: '-45deg', ...common }, '>')
        .from('.sec-home-hero-subtitle', { y: '-100%', ...common }, '<')
        .from('.sec-home-hero-title', { x: '-100%', ...common }, '<');
    },
    { scope: scopeRef, revertOnUpdate: true }
  );

  return (
    <Page.Hero ref={scopeRef}>
      <div className="sec-home-hero-content">
        <Subtitle h2 className="sec-home-hero-subtitle">
          Andrew Lenhart
        </Subtitle>
        <Title h1 className="sec-home-hero-title">
          Software Engineer
        </Title>
      </div>
      <div data-scheme="accent-gradient-bottom-left" className="sec-home-hero-underlay--upper" />
      <div data-scheme="accent-gradient-top-right" className="sec-home-hero-underlay--lower" />
    </Page.Hero>
  );
};
