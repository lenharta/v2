import { Screen } from '@/app/layouts';
import { Button, Title } from '@/common';
import { useStore, useStoreDispatch } from '@/store';
import React from 'react';
import { useNavigate } from 'react-router';

const SplashRow = () => {
  return (
    <div className="SplashScreen-row">
      <div className="SplashScreen-cell" />
      <div className="SplashScreen-cell" />
      <div className="SplashScreen-cell" />

      <div className="SplashScreen-cell" />
      <div className="SplashScreen-cell" />
      <div className="SplashScreen-cell" />

      <div className="SplashScreen-cell" />
      <div className="SplashScreen-cell" />
      <div className="SplashScreen-cell" />

      <div className="SplashScreen-cell" />
      <div className="SplashScreen-cell" />
      <div className="SplashScreen-cell" />
    </div>
  );
};

export const SplashScreen = () => {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const [isAnimating, setAnimating] = React.useState<boolean>();

  React.useEffect(() => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 3000);
    setTimeout(() => {
      navigate('/home');
      dispatch({ isTransition: true });
    }, 6000);
    return () => {
      setAnimating(undefined);
    };
  }, []);

  return (
    <>
      <div className="SplashScreen-controls">
        <Button onClick={() => setAnimating(true)}>Enter</Button>
        <Button onClick={() => setAnimating(false)}>Exit</Button>
        <Button onClick={() => setAnimating(undefined)}>Reset</Button>
      </div>

      <Screen
        className="SplashScreen"
        data-animation-exit={isAnimating === false ? true : undefined}
        data-animation-enter={isAnimating === true ? true : undefined}
      >
        <div className="SplashScreen-radial" />
        <div className="SplashScreen-grid">
          <SplashRow />
          <SplashRow />
          <SplashRow />

          <SplashRow />
          <SplashRow />
          <SplashRow />

          <SplashRow />
          <SplashRow />
          <SplashRow />

          <SplashRow />
          <SplashRow />
          <SplashRow />
        </div>
      </Screen>
    </>
  );
};
