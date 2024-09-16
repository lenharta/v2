import * as React from 'react';
import { Section } from '@/app';
import { Tabs, Text, Title } from '@/core';

type HomeResumeComponent = React.FC<{}>;

export const HomeResume: HomeResumeComponent = ({}) => {
  const [value, onChange] = React.useState('home:resume:DOR');

  return (
    <Section className="v2-home-resume">
      <Title className="v2-home-resume-title" h3>
        <span>From Startups to</span>
        <span>Titans Of Industries.</span>
      </Title>

      <Tabs
        size="md"
        variant="accent"
        className="v2-home-resume-tabs"
        onChange={onChange}
        value={value}
      >
        <Tabs.List className="v2-home-resume-tabs-list">
          <Tabs.Item value="home:resume:DOR">2023</Tabs.Item>
          <Tabs.Item value="home:resume:ANT">2021</Tabs.Item>
          <Tabs.Item value="home:resume:PAC">2020</Tabs.Item>
          <Tabs.Item value="home:resume:HAW">2019</Tabs.Item>
        </Tabs.List>

        <Tabs.Panel className="v2-home-resume-tabs-panel" value="home:resume:DOR">
          <Text span>New York, New York</Text>
          <Title h3>Doran Jones, Inc.</Title>
          <Text>
            Founded in 2010, Doran Jones, Inc. is a financial services Data Engineering and
            Application Development firm. Specializing in Capital Markets, Risk, and Regulatory
            Compliance, Doran delivers high-quality, affordable solutions that ensured compliance
            and mitigated risk in dynamic environments.
          </Text>
        </Tabs.Panel>

        <Tabs.Panel className="v2-home-resume-tabs-panel" value="home:resume:ANT">
          <Text span>Sterling, VA</Text>
          <Title h3>Antra, Inc.</Title>
          <Text>
            Antra Inc. addresses the crucial gap between modern technology adoption and business
            growth by providing strategic solutions to seamlessly connect technology with business
            objectives. Antra offers a full range of IT services in a cost-effective manner,
            combining technical knowledge with business acumen to drive success for our clients.
          </Text>
        </Tabs.Panel>

        <Tabs.Panel className="v2-home-resume-tabs-panel" value="home:resume:PAC">
          <Text span>Greensboro, NC</Text>
          <Title h3>Pace Communications</Title>
          <Text>
            One of the world's leading growth marketing agencies. With deep strength in content,
            brand storytelling and integrated marketing, Pace designs, builds, and manages leading
            websites and digital story resumeeriences for global clients through custom web
            development and producing award-winning integrated brand narratives.
          </Text>
        </Tabs.Panel>

        <Tabs.Panel className="v2-home-resume-tabs-panel" value="home:resume:HAW">
          <Text span>Greensboro, NC</Text>
          <Title h3>Hawthorne Residential</Title>
          <Text>
            Hawthorne Residential Partners is a privately held property management firm that
            provides services in the apartment industry across the Southeast and Texas. Their
            innovative approach includes resident web apps and portals, enhancing tenant
            resumeerience and operational efficiency through advanced technology solutions.
          </Text>
        </Tabs.Panel>
      </Tabs>
    </Section>
  );
};
