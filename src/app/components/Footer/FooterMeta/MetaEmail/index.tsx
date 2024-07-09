import { META } from '@/app';
import { Text } from '@/core';

const MetaEmail: React.FC<{}> = ({}) => (
  <Text className="v2-footer-meta-email" data-type="email">
    <span>{META.owner.email.user}</span>
    <span>{META.owner.email.provider}</span>
  </Text>
);

MetaEmail.displayName = '@v2/Footer.Meta.Email';
export { MetaEmail };
