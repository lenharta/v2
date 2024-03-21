import { Text } from '@/common';
import { ContactAddressObj, ContactDataProps, ContactInfoObj, ContactNameObj } from '@/types';

interface FooterContactProps extends Partial<ContactDataProps> {}

interface FooterContactComponents {
  Name: React.FC<Partial<ContactNameObj>>;
  Info: React.FC<Partial<ContactInfoObj>>;
  Address: React.FC<Partial<ContactAddressObj>>;
}

type FooterContactComponent = React.FC<FooterContactProps> & FooterContactComponents;

export const FooterContact: FooterContactComponent = (props) => {
  const { name, info, address } = props;
  return (
    <div className="footer-contact">
      <FooterContact.Name {...name} />
      <FooterContact.Info {...info} />
      <FooterContact.Address {...address} />
    </div>
  );
};

FooterContact.Name = (props) => {
  return <Text className="footer-contact-name" children={[props.first, props.last].join(' ')} />;
};

FooterContact.Info = (props) => {
  return <Text className="footer-contact-info" children={props.email} />;
};

FooterContact.Address = (props) => {
  return (
    <Text className="footer-contact-address" children={[props.city, props.state].join(', ')} />
  );
};

FooterContact.displayName = '@v2/Footer.Contact';
