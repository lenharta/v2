import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Factory, Store } from '@/types';

interface CopyBoxProps {
  lang: Store.ThemeState['lang'];
}

type CopyBoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: CopyBoxProps;
}>;

interface CopyItem {
  key: string;
  value: string;
}

interface CopyData {
  arabic: CopyItem[];
  french: CopyItem[];
  german: CopyItem[];
  spanish: CopyItem[];
  english: CopyItem[];
  japanese: CopyItem[];
}

export const CopyBox = factory<CopyBoxFactory>((props, ref) => {
  const { lang, className, ...otherProps } = props;
  const { name } = lang ?? {};

  return <Box {...otherProps} ref={ref}></Box>;
});
