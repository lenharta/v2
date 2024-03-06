import gsap from 'gsap';
import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { useThemeCTX } from '@/store';

const AnimatedGridRow = ({ index }: { index: number }) => {
  const rowRef = React.useRef(null);
  const timelineRef = React.useRef<gsap.core.Timeline>();
  const { state } = useThemeCTX();

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .from('.animated-grid-cell', {
          y: 60,
          x: 40,
          scale: 0.1,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
          stagger: {
            amount: Math.sin(0.1) * index,
          },
        })
        .to('.animated-grid-cell', {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
        });
    },
    { scope: rowRef, dependencies: [state.accent], revertOnUpdate: true }
  );

  return (
    <div className="animated-grid-row" ref={rowRef}>
      {new Array(12).fill(null).map((_, cell) => {
        const backgroundColor = `rgba(var(--c-accent), ${index * 0.02 + cell * 0.02})`;
        return (
          <div
            key={`r-${index}-c-${cell}`}
            style={{ backgroundColor }}
            className="animated-grid-cell"
          />
        );
      })}
    </div>
  );
};

export const AnimatedGrid = () => {
  return (
    <div className="animated-grid">
      <AnimatedGridRow index={1} />
      <AnimatedGridRow index={2} />
      <AnimatedGridRow index={3} />

      <AnimatedGridRow index={4} />
      <AnimatedGridRow index={5} />
      <AnimatedGridRow index={6} />

      <AnimatedGridRow index={7} />
      <AnimatedGridRow index={8} />
      <AnimatedGridRow index={9} />

      <AnimatedGridRow index={10} />
      <AnimatedGridRow index={11} />
      <AnimatedGridRow index={12} />
    </div>
  );
};
