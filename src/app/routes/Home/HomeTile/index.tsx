import { Store } from '@/types';
import { RouteTile } from '@/app/common';
import { DATA_HOME_ROUTE_TILES } from '@/data';

interface HomeRouteTileProps {
  lang: Store.LanguageName;
  navigate: (to: string) => void;
}

export const HomeRouteTile = ({ lang, navigate }: HomeRouteTileProps) => {
  const data = DATA_HOME_ROUTE_TILES[lang];
  return <RouteTile items={data} navigate={navigate} />;
};
