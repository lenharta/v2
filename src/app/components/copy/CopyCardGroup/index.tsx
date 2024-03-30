import clsx from 'clsx';
import { Box } from '@/common';
import { CopyCard } from '../CopyCard';
import { CopyCardData } from '@/data/types';
import { LayoutProps, ThemeProps } from '@/types';

export type CopyCardGroupProps = { data: CopyCardData[] } & LayoutProps & ThemeProps;

export const CopyCardGroup = (props: CopyCardGroupProps) => {
  const { data, lang, children, className, ...otherProps } = props;
  return (
    <Box className={clsx('copy-card-group', className)} {...otherProps}>
      {children}
      {data.map((card) => (
        <CopyCard key={card.id} data={card} lang={lang} />
      ))}
    </Box>
  );
};
