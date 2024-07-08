import * as React from 'react';
import { Logo, ROUTE } from '@/app';
import { Text, Title } from '@/core';
import { FooterLinkGroup } from './FooterLinkGroup';

interface FooterProps {}

type FooterFactory = React.FC<FooterProps> & {
  LinkGroup: typeof FooterLinkGroup;
};

const Footer: FooterFactory = ({}) => {
  return (
    <footer className="v2-footer">
      <div className="v2-footer-layout">
        <div className="v2-footer-meta">
          <Logo variant="accent-low" size="md" />
          <div className="v2-footer-meta-layout">
            <Title className="v2-footer-meta-name" h4>
              Andrew Lenhart
            </Title>
            <Text className="v2-footer-meta-location">Winston-Salem, North Carolina</Text>
            <Text className="v2-footer-meta-email">andrew.code21@gmail.com</Text>
            <Text className="v2-footer-meta-handle">@lenharta</Text>
          </div>
        </div>
        <div className="v2-footer-links">
          <Footer.LinkGroup
            group={{ id: 'footer:nav:group', label: 'Portfolio' }}
            items={[
              {
                id: `footer:nav:item:${ROUTE.key.home}`,
                label: ROUTE.label.home,
                value: ROUTE.link.home,
              },
              {
                id: `footer:nav:item:${ROUTE.key.about}`,
                label: ROUTE.label.about,
                value: ROUTE.link.about,
              },
              {
                id: `footer:nav:item:${ROUTE.key.stack}`,
                label: ROUTE.label.stack,
                value: ROUTE.link.stack,
              },
              {
                id: `footer:nav:item:${ROUTE.key.projects}`,
                label: ROUTE.label.projects,
                value: ROUTE.link.projects,
              },
              {
                id: `footer:nav:item:${ROUTE.key.articles}`,
                label: ROUTE.label.articles,
                value: ROUTE.link.articles,
              },
              {
                id: `footer:nav:item:${ROUTE.key.elements}`,
                label: ROUTE.label.elements,
                value: ROUTE.link.elements,
              },
            ]}
          />

          {/* <Footer.LinkGroup
            group={{ id: 'footer:group:connect ', label: 'Connect' }}
            items={[
              {
                id: `footer:connect:item:${META_MAP.social}`,
                value: SOCIAL.link.github,
                label: SOCIAL.label.github,
              },
              {
                id: `footer:connect:item:${SOCIAL.key.twitterx}`,
                value: SOCIAL.link.twitterx,
                label: SOCIAL.label.twitterx,
              },
              {
                id: `footer:connect:item:${SOCIAL.key.linkedin}`,
                value: SOCIAL.link.linkedin,
                label: SOCIAL.label.linkedin,
              },
              {
                id: `footer:connect:item:${SOCIAL.key.instagram}`,
                value: SOCIAL.link.instagram,
                label: SOCIAL.label.instagram,
              },
              {
                id: `footer:connect:item:${SOCIAL.key.codesandbox}`,
                value: SOCIAL.link.codesandbox,
                label: SOCIAL.label.codesandbox,
              },
              {
                id: `footer:connect:item:${SOCIAL.key.npm}`,
                value: SOCIAL.link.npm,
                label: SOCIAL.label.npm,
              },
              {
                id: `footer:connect:item:${SOCIAL.key.stackoverflow}`,
                value: SOCIAL.link.stackoverflow,
                label: SOCIAL.label.stackoverflow,
              },
            ]}
          /> */}
        </div>
      </div>
    </footer>
  );
};

Footer.LinkGroup = FooterLinkGroup;
Footer.displayName = '@v2/App.Footer';
export { Footer, type FooterProps, type FooterFactory };
