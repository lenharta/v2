import gsap from 'gsap';
import React from 'react';
import { Logo, Screen } from '@/app/common';
import { Title, Transition } from '@/core';
import { SPLASH_DURATION, TOKENS } from '@/app/config';
import { createLocalSession, useAppDispatch, useAppState, useThemeState } from '@/store';
import { useGSAP } from '@gsap/react';
import { objectKeys } from '@/utils';
import { Store } from '@/types';

export interface SplashProps {
  children?: React.ReactNode | undefined;
  isSplash?: boolean;
}

export interface SplashAnimationProps {
  isMounted?: boolean | undefined;
}

const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const rows = {
  1: cells,
  2: cells,
  3: cells,
  4: cells,
  5: cells,
  6: cells,
  7: cells,
  8: cells,
  9: cells,
  10: cells,
  11: cells,
};

const SplashAnimation = ({ onComplete }: { onComplete: (value: boolean) => void }) => {
  const scope = React.useRef<HTMLDivElement>(null);
  const timeline = React.useRef<gsap.core.Timeline>();

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline()
        .from('.splash-animation-logo', { x: 100, opacity: 0, rotate: '-270deg' })
        .from('.splash-animation-cell', {
          y: 40,
          opacity: 0,
          ease: 'power1.inOut',
          stagger: {
            grid: [0, 0],
            from: 'end',
            ease: 'power1.inOut',
            amount: 1.6,
          },
        })
        .to(
          '.splash-animation-cell',
          {
            y: -40,
            opacity: 0,
            ease: 'power3.inOut',
            scale: 0.1,
            onComplete,
            stagger: {
              grid: [0, 0],
              from: 'end',
              ease: 'power1.inOut',
              amount: 1.6,
            },
          },
          '>'
        );
    },
    { scope }
  );

  return (
    <div ref={scope} className="splash-animation">
      <Logo className="splash-animation-logo" />
      <div className="splash-animation-grid">
        {objectKeys(rows).map((row) => (
          <div className="splash-animation-row" key={['row', row].join('-')}>
            {rows[row].map((cell) => (
              <div className="splash-animation-cell" key={[row, 'cell', cell].join('-')} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export type SplashComponent = React.FC<SplashProps> & {};

export const Splash: SplashComponent = ({ children }) => {
  const timeout = React.useRef<NodeJS.Timeout>();
  const [mounted, setMounted] = React.useState(true);
  const dispatch = useAppDispatch();
  const state = useAppState();

  React.useEffect(() => {
    void createLocalSession({
      sessionKey: state.middleware.fetch()?.sessionKey || state.sessionKey,
      middleware: state.middleware,
      dispatch,
    });

    // if (state.isSplash && !mounted) {
    //   setMounted(true);

    //   timeout.current = setTimeout(() => {
    //     setMounted(false);
    //   }, SPLASH_DURATION);

    //   return () => {
    //     clearTimeout(timeout.current);
    //   };
    // }
  }, []);

  return (
    <React.Fragment>
      {state.isSplash ? (
        <Transition
          mounted={mounted}
          // duration={SPLASH_DURATION}
          timingFunction={TOKENS.easing.standard.expressive}
          onExited={() => dispatch({ isSplash: false })}
          transition={{
            transitionProperty: 'transform, opacity',
            common: { transformOrigin: 'right' },
            in: { opacity: 1 },
            out: { opacity: 0 },
          }}
        >
          {(transitionStyles) => (
            <Screen className="splash" style={transitionStyles}>
              <Screen.Content>
                <SplashAnimation
                  onComplete={() => {
                    dispatch({ isSplash: false });
                    setMounted(false);
                  }}
                />
              </Screen.Content>
            </Screen>
          )}
        </Transition>
      ) : (
        children
      )}
    </React.Fragment>
  );
};
