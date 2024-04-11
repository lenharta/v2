import clsx from 'clsx';
import gsap from 'gsap';
import * as React from 'react';
import { Page } from '@/site/components';
import { useGSAP } from '@gsap/react';
import { Box, Subtitle, Title } from '@/core';
import { useMotionTimeline } from '@/motion';

export const HomeHeroGridCell = ({ cell }: { cell?: string }) => {
  return <div className={clsx('sec-home-hero-grid-cell', cell)} />;
};

export const HomeHeroGridRow = ({ row, cells }: { row: string; cells: string[] }) => {
  return (
    <div className={clsx('sec-home-hero-grid-row', row)}>
      {cells.map((cell) => (
        <HomeHeroGridCell key={cell} cell={cell} />
      ))}
    </div>
  );
};

const data = [
  {
    row: 'row-1',
    cells: [
      'row-1-box-1',
      'row-1-box-2',
      'row-1-box-3',
      'row-1-box-4',
      'row-1-box-5',
      'row-1-box-6',
    ],
  },
  {
    row: 'row-2',
    cells: [
      'row-2-box-1',
      'row-2-box-2',
      'row-2-box-3',
      'row-2-box-4',
      'row-2-box-5',
      'row-2-box-6',
    ],
  },
];

export const HomeHero = () => {
  const { scope, timeline } = useMotionTimeline<HTMLDivElement>();

  const common: gsap.TweenVars = {
    ease: 'sine.inOut',
    opacity: 0,
    duration: 0.2,
  };

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline()
        .from('.row-1', { ...common })
        .from('.row-1-box-1', { ...common })
        .from('.row-1-box-2', { ...common })
        .from('.row-1-box-3', { ...common })
        .from('.row-1-box-4', { ...common })
        .from('.row-1-box-5', { ...common })
        .from('.row-1-box-6', { ...common })
        .from('.row-2', { ...common })
        .from('.row-2-box-1', { ...common })
        .from('.row-2-box-2', { ...common })
        .from('.row-2-box-3', { ...common })
        .from('.row-2-box-4', { ...common })
        .from('.row-2-box-5', { ...common })
        .from('.row-2-box-6', { ...common });
    },
    { scope }
  );

  return (
    <Page.Hero ref={scope}>
      <Box className="sec-home-hero-content">
        <Subtitle className="sec-home-hero-title--upper" h2>
          Andrew Lenhart
        </Subtitle>
        <Title className="sec-home-hero-title--lower" h1>
          Software Engineer
        </Title>
      </Box>
      <Box className="sec-home-hero-grid">
        {data.map(({ cells, row }) => (
          <HomeHeroGridRow key={row} row={row} cells={cells} />
        ))}
      </Box>
    </Page.Hero>
  );
};
