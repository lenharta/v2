import * as React from 'react';
import { Text } from '@/common';
import { mergeProps } from '@/utils';
import { ContactData, ElementProps } from '@/types/global';
import { FooterNav } from '../FootNav';

export interface FooterLayoutProps extends Omit<ElementProps<'footer'>, 'children'> {}

const defaultProps: Partial<FooterLayoutProps> = {};

export interface FooterContactProps {
  data?: ContactData;
}

const FooterContact = (props: FooterContactProps) => {
  const { data } = props;
  return (
    <div className="footer-contact">
      <Text>
        {data?.firstName} {data?.lastName}
      </Text>
      <Text>{data?.email}</Text>
      <Text>
        {data?.city}, {data?.state}
      </Text>
    </div>
  );
};

export const FooterLayout = React.forwardRef<HTMLElement, FooterLayoutProps>((props, ref) => {
  const { ...otherProps } = mergeProps(defaultProps, props);
  return (
    <footer {...otherProps} ref={ref} className="footer-layout">
      <FooterContact
        data={{
          firstName: 'Andrew',
          lastName: 'Lenhart',
          email: 'andrew.code21@gmail.com',
          city: 'Winston Salem',
          state: 'North Carolina',
        }}
      />
      <FooterNav
        items={[
          { value: '/', label: 'Home' },
          { value: '/sandbox', label: 'Sandbox' },
          { value: '/toolbox', label: 'Toolbox' },
        ]}
      />
    </footer>
  );
});

FooterLayout.displayName = '@v2/FooterLayout';
