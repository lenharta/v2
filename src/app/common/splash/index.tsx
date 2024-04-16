import React from 'react';
import { Screen } from '@/app/common';
import { Title, Transition } from '@/core';
import { SPLASH_DURATION, TOKENS } from '@/app/config';
import { createLocalSession, useAppDispatch, useAppState } from '@/store';

export interface SplashProps {
  children?: React.ReactNode | undefined;
  isSplash?: boolean;
}

export type SplashComponent = React.FC<SplashProps> & {};

export const Splash: SplashComponent = ({ children }) => {
  const timeout = React.useRef<NodeJS.Timeout>();
  const [mounted, setMounted] = React.useState(false);
  const dispatch = useAppDispatch();
  const state = useAppState();

  React.useEffect(() => {
    void createLocalSession({
      sessionKey: state.middleware.fetch()?.sessionKey || state.sessionKey,
      middleware: state.middleware,
      dispatch,
    });

    if (state.isSplash && !mounted) {
      setMounted(true);

      timeout.current = setTimeout(() => {
        setMounted(false);
      }, SPLASH_DURATION);

      return () => {
        clearTimeout(timeout.current);
      };
    }
  }, []);

  return (
    <React.Fragment>
      {state.isSplash ? (
        <Transition
          mounted={mounted}
          duration={SPLASH_DURATION}
          timingFunction={TOKENS.easing.standard.expressive}
          onExited={() => dispatch({ isSplash: false })}
          transition={{
            transitionProperty: 'transform, opacity',
            common: { transformOrigin: 'right' },
            in: { transform: 'translateY(0%)', opacity: 1 },
            out: { transform: 'translateY(50%)', opacity: 0 },
          }}
        >
          {(transitionStyles) => (
            <Screen className="splash" style={transitionStyles}>
              <Screen.Content>
                <Title h2>Splash Screen</Title>
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
