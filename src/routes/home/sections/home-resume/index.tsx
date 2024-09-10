import * as React from 'react';
import { Headline, Section } from '@/app';
import { Button, Tabs, Text, Title } from '@/core';

const headers = [
  {
    value: 'home:resume:doran',
    label: '2024',
  },
  {
    value: 'home:resume:antra',
    label: '2022',
  },
  {
    value: 'home:resume:pace',
    label: '2021',
  },
  {
    value: 'home:resume:hawthorne',
    label: '2020',
  },
];

const panels = [
  {
    title: `Doran Jones, Inc.`,
    value: `home:resume:doran`,
    location: `New York, New York`,
    description: `Founded in 2010, Doran Jones, Inc. is a financial services Data Engineering and Application Development firm. Specializing in Capital Markets, Risk, and Regulatory Compliance, Doran delivers high-quality, affordable solutions that ensured compliance and mitigated risk in dynamic environments.`,
  },
  {
    title: `Antra, Inc.`,
    value: `home:resume:antra`,
    location: `Sterling, Virginia`,
    description: `Antra Inc. addresses the crucial gap between modern technology adoption and business growth by providing strategic solutions to seamlessly connect technology with business objectives. Antra offers a full range of IT services in a cost-effective manner, combining technical knowledge with business acumen to drive success for our clients.`,
  },
  {
    title: `Pace Communications`,
    value: `home:resume:pace`,
    location: `Greensboro, North Carolina`,
    description: `One of the world's leading growth marketing agencies. With deep strength in content, brand storytelling and integrated marketing, Pace designs, builds, and manages leading websites and digital story resumeeriences for global clients through custom web development and producing award-winning integrated brand narratives.`,
  },
  {
    title: `Hawthorne Partners`,
    value: `home:resume:hawthorne`,
    location: `Greensboro, North Carolina`,
    description: `Hawthorne Residential Partners is a privately held property management firm that provides services in the apartment industry across the Southeast and Texas. Their innovative approach includes resident web apps and portals, enhancing tenant resumeerience and operational efficiency through advanced technology solutions.`,
  },
];

export const HomeResume = () => {
  const [tab, setTab] = React.useState('home:resume:doran');

  return (
    <>
      <Headline className="v2-home-resume-headline" title="Resume" href="home-resume" order=".03" />
      <Section className="v2-home-resume">
        <div className="v2-home-resume-banner">
          <Title className="v2-home-resume-banner-title" h3>
            <span className="v2-home-resume-banner-title-line-1">From Startups to</span>
            <span className="v2-home-resume-banner-title-line-2">Titans Of Industries.</span>
          </Title>
        </div>

        <Tabs
          value={tab}
          onValueChange={setTab}
          className="v2-home-resume-tabs"
          variant="accent"
          size="md"
        >
          <Tabs.List className="v2-home-resume-tabs-list" grow>
            {headers.map((item) => (
              <Tabs.Item className="v2-home-resume-tabs-item" value={item.value} key={item.value}>
                {item.label}
              </Tabs.Item>
            ))}
          </Tabs.List>

          {panels.map((item) => (
            <Tabs.Panel className="v2-home-resume-tabs-panel" value={item.value} key={item.value}>
              <div className="v2-home-resume-tabs-panel-layout">
                <Text className="v2-home-resume-tabs-panel-overline" span>
                  <>{item.location}</>
                </Text>

                <Title className="v2-home-resume-tabs-panel-title" h3>
                  <>{item.title}</>
                </Title>

                <Text className="v2-home-resume-tabs-panel-text">
                  <>{item.description}</>
                </Text>

                <Button
                  size="md"
                  iconRight={{ name: 'arrow-east' }}
                  className="v2-home-resume-tabs-panel-button"
                  children="Full Resume"
                />
              </div>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Section>
    </>
  );
};
