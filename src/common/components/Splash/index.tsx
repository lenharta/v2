import gsap from 'gsap';
import React from 'react';
import { Screen } from '@/common';
import { Transition, factory } from '@/core';
import { Core, Factory } from '@/types';
import { useGSAP } from '@gsap/react';
import { SplashRow } from './SplashRow';
import { SplashCell } from './SplashCell';
import { SplashGrid } from './SplashGrid';
import { useStoreDispatch, useStoreState } from '@/store';
import { SplashRoot } from './SplashRoot';

type SplashClasses = Record<'root' | 'logo' | 'grid' | 'cell' | 'row', string>;
type SplashPositionRow = `r-${SplashPositionY}`;
type SplashPositionCell = `r-${SplashPositionY}-c-${SplashPositionX}`;
type SplashPositionY = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11';
type SplashPositionX = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K';

const splashRowData: SplashPositionY[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const splashCellData: SplashPositionX[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

interface SplashItem {
  cells: SplashPositionX[];
  row: SplashPositionY;
}

interface SplashProps {
  items: SplashItem[];
}

const css: SplashClasses = {
  root: 'v2-splash',
  logo: 'v2-splash-logo',
  grid: 'v2-splash-grid',
  cell: 'v2-splash-cell',
  row: 'v2-splash-row',
};

function getSelector(css: string) {
  return ['.', css].join('');
}

function getGridRowId(row: SplashPositionY): SplashPositionRow {
  return ['r', row].join('-') as SplashPositionRow;
}

function getGridCellId(row: SplashPositionY, cell: SplashPositionX): SplashPositionCell {
  return [getGridRowId(row), 'c', cell].join('-') as SplashPositionCell;
}

function getGridData(): SplashItem[] {
  return splashRowData.map((i) => ({
    cells: splashCellData,
    row: i,
  }));
}

const splashMotion: gsap.TweenVars = {
  ease: 'power1.inOut',
  opacity: 0,
  stagger: {
    ease: 'power1.inOut',
    from: 'end',
    grid: [0, 0],
    amount: 1.6,
  },
};

const splashTransition: Partial<Core.TransitionProps> = {
  keepMounted: true,
  timingFunction: 'ease',
  transition: {
    transitionProperty: 'transform, opacity',
    common: { transformOrigin: 'right' },
    out: { opacity: 0 },
    in: { opacity: 1 },
  },
};

type SplashFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SplashProps;
  comps: {
    Row: typeof SplashRow;
    Cell: typeof SplashCell;
    Grid: typeof SplashGrid;
    Root: typeof SplashRoot;
  };
}>;

const Splash = factory<SplashFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;

  const scope = React.useRef<HTMLDivElement>(null);
  const timeline = React.useRef<gsap.core.Timeline>();

  const state = useStoreState();
  const dispatch = useStoreDispatch();
  const [isMounted, setMounted] = React.useState(true);

  const gridData = React.useCallback(() => getGridData(), []);

  const onComplete = () => {
    dispatch({ splashOpen: false });
    setMounted(false);
  };

  useGSAP(
    () => {
      if (!state.splashOpen) return;

      timeline.current = gsap
        .timeline()
        .from(getSelector(css.logo), { x: 100, opacity: 0, rotate: '-270deg' })
        .from(getSelector(css.cell), { y: 40, ...splashMotion })
        .to(getSelector(css.cell), { y: -40, scale: 0.1, onComplete, ...splashMotion }, '>');
    },
    { scope }
  );

  return (
    <React.Fragment>
      {state.splashOpen ? (
        <Transition mounted={isMounted} {...splashTransition}>
          {(transitionStyles) => (
            <Screen {...forwardedProps} style={transitionStyles} ref={ref}>
              <Splash.Root role="presentation" ref={scope} className={css.root}>
                <Splash.Grid className={css.grid}>
                  {gridData().map(({ row, cells }) => (
                    <Splash.Row key={getGridRowId(row)} id={getGridRowId(row)} className={css.row}>
                      {cells.map((cell) => (
                        <Splash.Cell
                          id={getGridCellId(row, cell)}
                          key={getGridCellId(row, cell)}
                          className={css.cell}
                        />
                      ))}
                    </Splash.Row>
                  ))}
                </Splash.Grid>
              </Splash.Root>
            </Screen>
          )}
        </Transition>
      ) : (
        children
      )}
    </React.Fragment>
  );
});

Splash.Row = SplashRow;
Splash.Cell = SplashCell;
Splash.Grid = SplashGrid;
Splash.Root = SplashRoot;
Splash.displayName = '@v2/Splash';
