import { Text, Title } from '@/common';
import { ThemeProvider } from '@/store';

export const Error = () => {
  return (
    <ThemeProvider>
      <div className="screen-error">
        <Title>Page Not Found</Title>
        <Text>ERROR-404: Sorry, we had trouble finding that.</Text>
      </div>
    </ThemeProvider>
  );
};
