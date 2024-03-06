import gsap from 'gsap';
import React from 'react';
import { useGSAP } from '@gsap/react';
import { Title } from '@/common';
import { useThemeCTX } from '@/store';
import { AnimatedGrid } from '@/app/components';
import { DATA_HOME_SECTIONS } from '@/data';

export const HomeHero = () => {
  const { state } = useThemeCTX();
  const lang = state.lang || 'english';
  const heroRef = React.useRef<HTMLDivElement>(null);
  const timelineRef = React.useRef<gsap.core.Timeline>();

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .from('.sec-home-hero-content-copy', {
          x: -200,
          delay: 0.5,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
        })
        .to('.sec-home-hero-content-copy', {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
        });
    },
    { scope: heroRef }
  );

  return (
    <div className="sec-home-hero" ref={heroRef}>
      <div className="sec-home-hero-content-container">
        <div className="sec-home-hero-content-copy">
          <Title h1 size="lg">
            {DATA_HOME_SECTIONS[lang].hero.title}
          </Title>
        </div>
      </div>
      <div className="sec-home-hero-pattern">
        <AnimatedGrid />
      </div>
    </div>
  );
};
