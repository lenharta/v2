import { Page } from '@/app/page';
import { Section } from '@/app/section';
import { Button, ICON, Icon, Text, Title } from '@/core';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import React from 'react';

type DemoRouteComponent = React.FC<{}>;

interface SearchResultProps {}

type SearchResultFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchResultProps;
}>;

export const SearchResult = factory<SearchResultFactory>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="layout-search-result">
      {children}
    </div>
  );
});

interface SearchResultItemProps {
  title: string | undefined;
  icon?: ICON | undefined;
  tags?: string[];
}

type SearchResultItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SearchResultItemProps;
  omits: 'children';
}>;

export const SearchResultItem = factory<SearchResultItemFactory>((props, ref) => {
  const { title, icon = 'document', tags = [], ...otherProps } = props;
  return (
    <button {...otherProps} ref={ref} className="layout-search-result-item">
      <Icon name={icon} />
      <Text>{title}</Text>
      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </button>
  );
});

export const DemoResults = () => {
  return (
    <SearchResult>
      <SearchResultItem title="Home" />
      <SearchResultItem title="Experience" />
      <SearchResultItem title="Projects" />
    </SearchResult>
  );
};

// const DemoFloating = () => {
//   const [opened, onChange] = React.useState<boolean>();
//   return (
//     <Section>
//       <Section.Content>
//         <Floating opened={opened} onChange={onChange} width="target">
//           <Floating.Target>
//             <input type="text" />
//             {/* <button className="demo-floating-target">Floating Target</button> */}
//           </Floating.Target>
//           <Floating.Box>
//             <span className="demo-floating-box">Floating Box</span>
//           </Floating.Box>
//         </Floating>
//       </Section.Content>
//     </Section>
//   );
// };

export const Demo: DemoRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title h1>Demo</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Demo.displayName = '@v2/app/Route.Demo';
