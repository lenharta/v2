import gsap from 'gsap';
import React from 'react';
import { cx } from '@/app/utils';
import { Logo } from '@/app/components';
import { Screen } from '@/app/layouts';
import { EASING } from '@/app/config';
import { useGSAP } from '@gsap/react';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { Transition } from '@/core';
import { createLocalSession, useAppDispatch, useAppState } from '@/store';

type SplashClasses = Record<'grid' | 'row' | 'cell', string>;
type SplashPosition = `r-${SplashPositionY}-c-${SplashPositionX}`;
type SplashPositionX = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K';
type SplashPositionY = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11';

const splashRows: SplashPositionY[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const splashCells: SplashPositionX[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

interface SplashDataItem {
  cells: SplashPositionX[];
  row: SplashPositionY;
}

type SplashGridFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {
    css: SplashClasses;
    data: SplashDataItem[];
  };
}>;

type SplashGridRowFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {
    row: SplashPositionY;
    css: Pick<SplashClasses, 'cell' | 'row'>;
    cells: SplashPositionX[];
  };
}>;

const getGridPosition = (row: SplashPositionY, cell: SplashPositionX): SplashPosition => {
  return ['r', row, 'c', cell].join('-') as SplashPosition;
};

const getGridData = (): SplashDataItem[] => {
  return splashRows.map((i) => ({
    cells: splashCells,
    row: i,
  }));
};

const SplashGridRow = factory<SplashGridRowFactory>((props, ref) => {
  const { css, row, cells, ...forwardedProps } = props;
  return (
    <div {...forwardedProps} ref={ref} className={css.row}>
      {cells.map((cell) => (
        <div
          id={getGridPosition(row, cell)}
          key={getGridPosition(row, cell)}
          className={css.cell}
        />
      ))}
    </div>
  );
});

const SplashGrid = factory<SplashGridFactory>((props, ref) => {
  const { css, data, ...forwardedProps } = props;
  return (
    <div {...forwardedProps} ref={ref} className={css.grid}>
      {data.map(({ row, cells }) => (
        <SplashGridRow key={row} row={row} css={css} cells={cells} />
      ))}
    </div>
  );
});

type SplashFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
  comps: {
    Logo: typeof Logo;
    Grid: typeof SplashGrid;
  };
}>;

export const Splash = factory<SplashFactory>((props, ref) => {
  const {} = props;
  const state = useAppState();
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = React.useState(true);
  const timeline = React.useRef<gsap.core.Timeline>();
  const scope = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    void createLocalSession({
      sessionKey: state.middleware.fetch()?.sessionKey || state.sessionKey,
      middleware: state.middleware,
      dispatch,
    });
  }, []);

  const onComplete = () => {
    dispatch({ isSplash: false });
    setMounted(false);
  };

  const common: gsap.TweenVars = {
    ease: 'power1.inOut',
    opacity: 0,
    stagger: {
      ease: 'power1.inOut',
      from: 'end',
      grid: [0, 0],
      amount: 1.6,
    },
  };

  useGSAP(
    () => {
      if (!state.isSplash) return;
      timeline.current = gsap
        .timeline()
        .from('.v2-logo', { x: 100, opacity: 0, rotate: '-270deg' })
        .from('.v2-splash-cell', { y: 40, ...common })
        .to('.v2-splash-cell', { y: -40, scale: 0.1, onComplete, ...common }, '>');
    },
    { scope }
  );

  return (
    <React.Fragment>
      {state.isSplash ? (
        <Transition
          mounted={mounted}
          onExited={() => dispatch({ isSplash: false })}
          timingFunction={EASING.standard.expressive}
          keepMounted={true}
          transition={{
            transitionProperty: 'transform, opacity',
            common: { transformOrigin: 'right' },
            out: { opacity: 0 },
            in: { opacity: 1 },
          }}
        >
          {(transitionStyle) => (
            <Screen ref={ref} role="presentation">
              <div ref={scope} style={transitionStyle} className={cx('splash')}>
                <Splash.Logo />
                <Splash.Grid
                  data={getGridData()}
                  css={{
                    row: cx('splash-row'),
                    cell: cx('splash-cell'),
                    grid: cx('splash-grid'),
                  }}
                />
              </div>
            </Screen>
          )}
        </Transition>
      ) : null}

      {!state.isSplash && props.children}
    </React.Fragment>
  );
});

Splash.Logo = Logo;
Splash.Grid = SplashGrid;

Splash.displayName = '@v2/Splash';
Splash.Logo.displayName = '@v2/Splash.Logo';
Splash.Grid.displayName = '@v2/Splash.Grid';
