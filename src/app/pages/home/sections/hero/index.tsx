import * as React from 'react';
import { useExhibit } from '@/hooks';
import { Title } from '@/common';
import { Page } from '@/app/layouts';

const cellProps: React.CSSProperties = {
  color: 'rgba(var(--rgb-accent), 0.2)',
  height: 40,
  width: 40,
};

const test: KeyframeAnimationOptions = {
  duration: '1000ms',
};

const HeroAnimation = () => {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const ref2 = React.useRef<HTMLDivElement>(null);
  const ref3 = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node1 = ref1.current!;
    const node2 = ref2.current!;
    const node3 = ref3.current!;

    const PI = 3.14159265;
    const ANIMATE_DELAY = -200;
    const ANIMATE_EASING = 'ease-in-out';
    const ANIMATE_DURATION = 10000;
    const ANIMATE_ITERATIONS = Infinity;

    const transformUnit = (value: number, index: number = 1) => Number((value * index).toFixed(0));

    console.log(`translateX(${transformUnit(60, -1)}%) translateY(${transformUnit(60, 1)}%)`);

    node1.animate(
      {
        transform: [
          `translateX(${transformUnit(33, -1)}%) translateY(${transformUnit(66, 1)}%)`,
          `translateX(${transformUnit(66, 1)}%) translateY(${transformUnit(33, -1)}%)`,
          `translateX(${transformUnit(99, -1)}%) translateY(${transformUnit(66, 1)}%)`,
        ],
      },
      {
        fill: 'both',
        delay: ANIMATE_DELAY,
        easing: ANIMATE_EASING,
        duration: ANIMATE_DURATION,
        iterations: ANIMATE_ITERATIONS,
      }
    );
    node2.animate(
      {
        transform: [
          `translateX(${transformUnit(66, -1)}%) translateY(${transformUnit(99, 1)}%)`,
          `translateX(${transformUnit(99, 1)}%) translateY(${transformUnit(66, -1)}%)`,
          `translateX(${transformUnit(133, -1)}%) translateY(${transformUnit(99, 1)}%)`,
        ],
      },
      {
        fill: 'both',
        delay: ANIMATE_DELAY,
        easing: ANIMATE_EASING,
        duration: ANIMATE_DURATION * 2,
        iterations: ANIMATE_ITERATIONS,
      }
    );
    node3.animate(
      {
        transform: [
          `translateX(${transformUnit(99, -1)}%) translateY(${transformUnit(133, 1)}%)`,
          `translateX(${transformUnit(133, 1)}%) translateY(${transformUnit(99, -1)}%)`,
          `translateX(${transformUnit(166, 1)}%) translateY(${transformUnit(133, -1)}%)`,
        ],
      },
      {
        fill: 'both',
        delay: ANIMATE_DELAY,
        easing: ANIMATE_EASING,
        duration: ANIMATE_DURATION * 2,
        iterations: ANIMATE_ITERATIONS,
      }
    );

    console.log(node1);
  }, []);

  return (
    <>
      <div
        ref={ref1}
        style={{
          zIndex: -2,
          width: 500,
          height: 500,
          backgroundColor: 'rgba(var(--rgb-accent), 0.4)',
          borderRadius: '1000px',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      />
      <div
        ref={ref2}
        style={{
          zIndex: -2,
          width: 300,
          height: 300,
          backgroundColor: 'rgba(var(--rgb-accent), 0.4)',
          borderRadius: '1000px',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      />
      <div
        ref={ref3}
        style={{
          zIndex: -2,
          width: 200,
          height: 200,
          backgroundColor: 'rgba(var(--rgb-accent), 0.4)',
          borderRadius: '1000px',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      />
    </>
  );
};

export const HomeHero = () => {
  const [mounted, { toggle }] = useExhibit();
  return (
    <div className="Home-hero">
      <Page.Container>
        <div className="Home-hero-content">
          <Title component="h1">Andrew Lenhart</Title>
          <Title component="h2">Software Engineer</Title>
          {/* <Button onClick={toggle}>Toggle</Button> */}
        </div>
        <div className="Home-hero-filter" />
        <HeroAnimation />
      </Page.Container>
    </div>
  );
};
