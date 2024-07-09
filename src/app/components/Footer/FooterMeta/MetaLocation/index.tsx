import { META } from '@/app';
import { Text } from '@/core';

const MetaLocation: React.FC<{}> = ({}) => (
  <Text className="v2-footer-meta-location" data-type="location">
    <span>{META.location.nc.city.name}, </span>
    <span>{META.location.nc.city.name}</span>
  </Text>
);

MetaLocation.displayName = '@v2/Footer.Meta.Location';
export { MetaLocation };
