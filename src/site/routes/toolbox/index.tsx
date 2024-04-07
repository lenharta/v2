import { Title } from '@/core';
import { Box, Page } from '@/site/components';

export const ToolboxHero = () => {
  return (
    <Page.Hero>
      <Box>
        <Title>Toolbox</Title>
      </Box>
    </Page.Hero>
  );
};

// // src/middleware.js
// const loggingMiddleware = (store) => (next) => (action) => {
//   console.log('Action:', action.type);
//   console.log('Payload:', action.payload);
//   return next(action);
// };
// export default loggingMiddleware;

export function Toolbox() {
  return (
    <Page>
      <ToolboxHero />
      <Page.Content>
        <span>Content</span>
      </Page.Content>
    </Page>
  );
}
