import { ThemeProvider } from '@/store';
import { Screen } from '@/app/layouts';
import { Title } from '@/common';

export const Error = () => {
  return (
    <ThemeProvider>
      <Screen>
        <Screen.Content>
          <div className="ErrorScreen">
            <Title size="lg" scheme="accent-max">
              Page Not Found
            </Title>
            <p>ERROR-404: Sorry, we had trouble finding that.</p>
          </div>
        </Screen.Content>
      </Screen>
    </ThemeProvider>
  );
};
