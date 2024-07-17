import { META } from '@data';
import { Title } from '@core';

const MetaName: React.FC<{}> = ({}) => (
  <Title className="v2-footer-meta-name" data-type="name" h4>
    <span>{META.owner.name.first} </span>
    <span>{META.owner.name.last}</span>
  </Title>
);

MetaName.displayName = '@v2/Footer.Meta.Name';
export { MetaName };
