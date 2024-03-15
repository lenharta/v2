import gsap from 'gsap';
import * as React from 'react';
import { useGSAP } from '@gsap/react';
import { useThemeCTX } from '@/store';

const ALPHA_STEP_VALUE = 0.02;

const getCellAlpha = (rowIndex: number, cellIndex: number) => {
  return rowIndex * ALPHA_STEP_VALUE + cellIndex * ALPHA_STEP_VALUE;
};

const getCellToken = (alpha: number) => {
  return `rgba(var(--c-accent), ${alpha})`;
};

export const GradientGridRow = ({ index }: { index: number }) => {
  const { state } = useThemeCTX();

  const data = new Array(12).fill(null);
  const scope = React.useRef<HTMLDivElement>(null);
  const timeline = React.useRef<gsap.core.Timeline>();

  const ease = 'power2.inOut';
  const stagger = { amount: Math.sin(0.1) * index };
  const dependencies = [state.accent];
  const commonStyles = { ease, duration: 1 };

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline()
        .from('.gradient-grid-cell', {
          y: 60,
          x: 40,
          scaleY: 1,
          scaleX: 1,
          opacity: 0,
          ...commonStyles,
          stagger,
        })
        .to('.gradient-grid-cell', {
          y: 0,
          x: 0,
          scaleY: 1,
          scaleX: 1,
          opacity: 1,
          ...commonStyles,
        });
    },
    { scope, dependencies, revertOnUpdate: true }
  );

  return (
    <div className="gradient-grid-row" ref={scope}>
      {data.map((_, cIndex) => (
        <div
          key={`r-${index}-c-${cIndex}`}
          style={{ backgroundColor: getCellToken(getCellAlpha(index, cIndex)) }}
          className="gradient-grid-cell"
        />
      ))}
    </div>
  );
};

export const GradientGrid = () => {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="gradient-grid">
      {rows.map((index) => (
        <GradientGridRow key={'row' + index} index={index} />
      ))}
    </div>
  );
};
