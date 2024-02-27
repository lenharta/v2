import { Screen } from '@/app/layouts';
import { Text, Title } from '@/common';

export const PageError404 = () => {
  return (
    <Screen>
      <Screen.Content>
        <Title h1>ERROR 404 - Page Not Found</Title>
        <Text>ERROR-404: Sorry, we had trouble finding that.</Text>
      </Screen.Content>
    </Screen>
  );
};
