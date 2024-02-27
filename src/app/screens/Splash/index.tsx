import { Screen } from '@/app/layouts';
import { useStore, useStoreDispatch } from '@/store';

export const SplashScreen = () => {
  const store = useStore();
  const dispatch = useStoreDispatch();

  return (
    <Screen className="SplashScreen">
      <div className="SplashScreen-controls"></div>
      <div className="SplashScreen-grid"></div>
    </Screen>
  );
};
