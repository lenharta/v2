import { Screen } from '@/app/layouts';
import { Title } from '@/common';

// Welcome
// ThemeMode
// ThemeColor
// ThemeAvatar
// ThemeDirection

export const OnBoardScreen = () => {
  // React.useEffect(() => {
  //   if (store.sessionId) {
  //     navigate('/home');
  //   }
  // }, []);

  // const createSession = () => {
  //   session.write();
  //   navigate('/home');
  // };

  return (
    <Screen>
      <Screen.Content>
        <Title h1>Color Your World</Title>
        {/* <Button onClick={createSession}>Procced</Button> */}
      </Screen.Content>
    </Screen>
  );
};
