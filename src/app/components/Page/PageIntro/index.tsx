import * as React from 'react';
import { Page } from '@/app';
import { Theme } from '@/types';
import { IconProps, Text } from '@/core';

interface PageIntroProps {
  text: string;
  links: Partial<{
    value: string;
    label: string;
    icon?: Partial<IconProps> | undefined;
    variant?:
      | 'base-default'
      | 'base-elevated'
      | 'accent-default'
      | 'accent-elevated'
      | 'accent-tonal'
      | 'accent-ghost'
      | `${Theme.Color}-tonal`
      | `${Theme.Color}-ghost`
      | `${Theme.Color}-default`
      | `${Theme.Color}-elevated`
      | undefined;
  }>[];
}

type PageIntroFactory = React.FC<PageIntroProps>;

const PageIntro: PageIntroFactory = (props) => {
  const { links, text } = props;
  return (
    <React.Fragment>
      <div className="v2-page-intro-layout">
        <div className="v2-page-intro-box v2-page-intro-banner">
          <Text>{text}</Text>
        </div>
        <nav className="v2-page-intro-box v2-page-intro-links">
          {(links || []).map((item) => (
            <Page.Link
              to={item.value}
              key={item.value}
              label={item.label}
              icon={{ ...item.icon, name: item.icon?.name || 'arrow-northeast' }}
              variant={item.variant || 'base-elevated'}
            />
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

PageIntro.displayName = '@v2/Page.Intro';
export { PageIntro };
