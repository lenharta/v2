import gsap from 'gsap';
import * as React from 'react';
import { Title } from '@/common';
import { useGSAP } from '@gsap/react';
import { GradientGrid } from '@/app/components';

export const HomeHero = () => {
  const scopeRef = React.useRef<HTMLDivElement>(null);
  const timelineRef = React.useRef<gsap.core.Timeline>();

  const baselineOptions: gsap.TweenVars = {
    opacity: 1,
    delay: 0,
    ease: 'expo.out',
    x: 0,
    y: 0,
  };

  const steps: Record<string, [string, gsap.TweenVars]> = {
    'name-from': ['.home-hero-title-name', { ...baselineOptions, opacity: 0, x: -200 }],
    'intro-from': ['.home-hero-title-intro', { ...baselineOptions, opacity: 0, x: -200 }],
    'name-to': ['.home-hero-title-name', { ...baselineOptions }],
    'intro-to': ['.home-hero-title-intro', { ...baselineOptions }],
  };

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .from(...steps['name-from'])
        .from(...steps['intro-from'])
        .to(...steps['name-to'])
        .to(...steps['intro-to']);
    },
    { scope: scopeRef }
  );

  return (
    <div className="home-hero" ref={scopeRef}>
      <div className="home-hero-content">
        <Title h1 className="home-hero-title-name" children="Andrew Lenhart" />
        <Title
          h2
          className="home-hero-title-intro"
          children="Front-End Engineer, Human-Centered Problem Solver."
        />
      </div>
      <div className="home-hero-grid" children={<GradientGrid />} />
    </div>
  );
};
