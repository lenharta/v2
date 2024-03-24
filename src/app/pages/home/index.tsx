import * as React from 'react';
import { Page } from '@/app/components';
import { Subtitle, Text, Title } from '@/common';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomeHero = () => {
  const scopeRef = React.useRef<HTMLDivElement>(null);
  const timelineRef = React.useRef<gsap.core.Timeline>();
  const commonFrom: gsap.TweenVars = { opacity: 0, ease: 'circ.inOut' };
  const commonTo: gsap.TweenVars = { opacity: 1, ease: 'circ.inOut' };

  useGSAP(
    () => {
      timelineRef.current = gsap
        .timeline()
        .from('.subtitle', { y: -100, ...commonFrom })
        .from('.title', { x: -100, ...commonFrom })
        .to('.subtitle', { y: 0, ...commonTo })
        .to('.title', { x: 0, ...commonTo });
    },
    { scope: scopeRef }
  );

  return (
    <div className="page-hero home-hero" ref={scopeRef}>
      <Subtitle>Andrew Lenhart</Subtitle>
      <Title>Software Engineer</Title>
      <div className="underlay-top" />
      <div className="underlay-bottom" />
    </div>
  );
};

export const Home = () => (
  <Page>
    <HomeHero />
    <Page.Content>
      <Page.Section>
        <Subtitle>Section One</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus hic qui alias
          doloremque nostrum, veniam vel tempora ex sint quos consequuntur totam possimus officia
          voluptates, tenetur sed officiis perspiciatis?
        </Text>
      </Page.Section>
      <Page.Section>
        <Subtitle>Section Two</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus hic qui alias
          doloremque nostrum, veniam vel tempora ex sint quos consequuntur totam possimus officia
          voluptates, tenetur sed officiis perspiciatis?
        </Text>
      </Page.Section>
    </Page.Content>
  </Page>
);
