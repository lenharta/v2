import { Box } from '@/core';

export type PageFooterComponent = React.FC<{}>;

export const PageFooter: PageFooterComponent = () => {
  return (
    <footer className="page-footer">
      <Box className="page-footer-box page-footer-box--upper"></Box>
      <Box className="page-footer-box page-footer-box--lower"></Box>
    </footer>
  );
};

PageFooter.displayName = '@v2/app/Page.Footer';
