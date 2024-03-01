import { AnimatedGrid } from '@/app/components';
import { Screen } from '@/app/layouts';

export const SplashScreen = ({ animating }: { animating?: boolean }) => {
  return (
    <Screen className="SplashScreen">
      <AnimatedGrid animating={animating} />
    </Screen>
  );
};
