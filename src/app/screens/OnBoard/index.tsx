import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Screen } from '@/app/layouts';
import { useStore } from '@/store';
import { useSession } from '@/hooks';
import { Button, Title } from '@/common';

// Welcome
// ThemeMode
// ThemeColor
// ThemeAvatar
// ThemeDirection

export const OnBoardScreen = () => {
  const store = useStore();
  const session = useSession();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (store.sessionId) {
      navigate('/home');
    }
  }, []);

  const createSession = () => {
    session.write();
    navigate('/home');
  };

  return (
    <Screen>
      <Screen.Content>
        <Title h1>Color Your World</Title>
        <Button onClick={createSession}>Procced</Button>
      </Screen.Content>
    </Screen>
  );
};
