import * as React from 'react';
import { HomeHero } from './HomeHero';
import { Page, Section } from '@/site/components';
import { Action, Button, Checkbox, Subtitle, Tabs, Text, Title } from '@/core';
import { useThemeDispatch } from '@/store';
import { Core } from '@/types';

interface DemoLayoutProps {
  title?: React.ReactNode | undefined;
  children?: React.ReactNode | undefined;
}

export const DemoLayout = ({ children, title }: DemoLayoutProps) => {
  return (
    <Section className="sec-demo-layout" scheme="primary">
      <Section.Header className="sec-demo-header">{title}</Section.Header>
      <Section.Content className="sec-demo-content">{children}</Section.Content>
    </Section>
  );
};

export const DemoContent = ({ title = 'Demo Panel' }: { title?: string }) => {
  return (
    <DemoLayout title={<Title>{title}</Title>}>
      <div>
        <Subtitle>Subtitle</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, id corrupti. Vero
          magni voluptates aut rerum, corporis sunt? Quisquam nulla architecto velit dolore deserunt
          enim ab expedita dolor commodi sed.
        </Text>
      </div>
      <div>
        <Subtitle>Subtitle</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, id corrupti. Vero
          magni voluptates aut rerum, corporis sunt? Quisquam nulla architecto velit dolore deserunt
          enim ab expedita dolor commodi sed.
        </Text>
      </div>
    </DemoLayout>
  );
};

export const HomeOverview = () => {
  return (
    <Section className="sec-home-overview">
      <Section.Content className="sec-home-overview-content">
        <div className="sec-home-overview-box" data-scheme="primary">
          <Title h2 className="sec-home-overview-title">
            Overview
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nulla est? Saepe
            aspernatur hic voluptatum beatae exercitationem corrupti minus, pariatur repellat
            incidunt asperiores vitae facilis neque voluptatibus? Ea, exercitationem? Earum!
          </Text>
        </div>
        <div className="sec-home-overview-box" data-scheme="primary">
          <Title h3 className="sec-home-overview-title">
            Section Title
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nulla est? Saepe
            aspernatur hic voluptatum beatae exercitationem corrupti minus, pariatur repellat
            incidunt asperiores vitae facilis neque voluptatibus? Ea, exercitationem? Earum!
          </Text>
        </div>
      </Section.Content>
    </Section>
  );
};

const DemoButtonDefault = () => {
  return (
    <DemoLayout title={<Title>Button Demo (default)</Title>}>
      <Button>Button</Button>
    </DemoLayout>
  );
};

const DemoCheckboxSingle = () => {
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  return (
    <DemoLayout title={<Title>Checkbox (single)</Title>}>
      <Checkbox
        checked={termsAccepted}
        onChange={(event) => setTermsAccepted(!event.currentTarget.value)}
        label="Accept Terms & Conditions"
      />
    </DemoLayout>
  );
};

const DemoCheckboxGroup = () => {
  const [value, onChange] = React.useState<string[]>([]);
  console.log(value);
  return (
    <DemoLayout title={<Title>Checkbox (group)</Title>}>
      <Checkbox.Group value={value} onChange={onChange} group="Checkbox Group 1">
        <Checkbox label="Opiton 1" value="option-1" />
        <Checkbox label="Opiton 2" value="option-2" />
        <Checkbox label="Opiton 3" value="option-3" />
        <Checkbox label="Opiton 4" value="option-4" />
        <Checkbox label="Opiton 5" value="option-5" />
      </Checkbox.Group>
    </DemoLayout>
  );
};

const DemoTabsUncontrolled = () => {
  return (
    <DemoLayout title={<Title>Tabs (uncontrolled)</Title>}>
      <Tabs defaultValue="tab-1A">
        <Tabs.List>
          <Tabs.Item value="tab-1A">Tab #1</Tabs.Item>
          <Tabs.Item value="tab-2A">Tab #2</Tabs.Item>
          <Tabs.Item value="tab-3A">Tab #3</Tabs.Item>
          <Tabs.Item value="tab-4A">Tab #4</Tabs.Item>
          <Tabs.Item value="tab-5A">Tab #5</Tabs.Item>
        </Tabs.List>

        <Tabs.Panel keepMounted value="tab-1A" children={<span>Panel #1A</span>} />
        <Tabs.Panel keepMounted value="tab-2A" children={<span>Panel #2A</span>} />
        <Tabs.Panel keepMounted value="tab-3A" children={<span>Panel #3A</span>} />
        <Tabs.Panel keepMounted value="tab-4A" children={<span>Panel #4A</span>} />
        <Tabs.Panel keepMounted value="tab-5A" children={<span>Panel #5A</span>} />
      </Tabs>
    </DemoLayout>
  );
};

const DemoTabsControlled = () => {
  const [value, onChange] = React.useState('tab-1B');
  return (
    <DemoLayout title={<Title>Tabs (controlled)</Title>}>
      <Tabs value={value} onChange={onChange}>
        <Tabs.List>
          <Tabs.Item value="tab-1B">Tab #1</Tabs.Item>
          <Tabs.Item value="tab-2B">Tab #2</Tabs.Item>
          <Tabs.Item value="tab-3B">Tab #3</Tabs.Item>
          <Tabs.Item value="tab-4B">Tab #4</Tabs.Item>
          <Tabs.Item value="tab-5B">Tab #5</Tabs.Item>
        </Tabs.List>
        <Tabs.Panel value="tab-1B" children={<span>Panel #1B</span>} />
        <Tabs.Panel value="tab-2B" children={<span>Panel #2B</span>} />
        <Tabs.Panel value="tab-3B" children={<span>Panel #3B</span>} />
        <Tabs.Panel value="tab-4B" children={<span>Panel #4B</span>} />
        <Tabs.Panel value="tab-5B" children={<span>Panel #5B</span>} />
      </Tabs>
    </DemoLayout>
  );
};

const DemoList = () => {
  return (
    <div>
      <DemoButtonDefault />
      <DemoCheckboxSingle />
      <DemoCheckboxGroup />
      <DemoTabsControlled />
      <DemoTabsUncontrolled />
    </div>
  );
};

export type SchemeType = 'accent' | 'primary' | 'secondary';

const DemoControls = () => {
  const { setMode } = useThemeDispatch();
  return (
    <DemoLayout>
      <Button onClick={() => setMode('light')}>Light</Button>
      <Button onClick={() => setMode('dark')}>Dark</Button>
      <Button onClick={() => setMode('dim')}>Dim</Button>
    </DemoLayout>
  );
};

interface SectionDemoProps {
  title?: React.ReactNode;
  scheme?: Core.Scheme;
  children?: React.ReactNode;
}

const DemoSectionCopy = () => (
  <>
    <div>
      <Subtitle>Subtitle</Subtitle>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita saepe suscipit nobis,
        facere beatae ut pariatur laudantium repellat velit, porro quae quis eveniet minus impedit
        repellendus obcaecati reprehenderit laboriosam distinctio.
      </Text>
      <Button>Button</Button>
      <Action icon="placeholder" />
      <Action icon="placeholder" />
      <Action icon="placeholder" />
    </div>
    <div>
      <Subtitle>Subtitle</Subtitle>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita saepe suscipit nobis,
        facere beatae ut pariatur laudantium repellat velit, porro quae quis eveniet minus impedit
        repellendus obcaecati reprehenderit laboriosam distinctio.
      </Text>
      <Button>Button</Button>
      <Action icon="placeholder" />
      <Action icon="placeholder" />
      <Action icon="placeholder" />
    </div>
  </>
);

export const DemoSection = ({ scheme = 'primary', title, children }: SectionDemoProps) => {
  return (
    <Section scheme={scheme} className="sec-demo-scheme-layout">
      {title && <Section.Header className="sec-demo-scheme-header">{title}</Section.Header>}
      <Section.Content className="sec-demo-scheme-content">{children}</Section.Content>
    </Section>
  );
};

export function Home() {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <DemoSection scheme="primary">
          <DemoSectionCopy />
        </DemoSection>
        <DemoSection scheme="secondary">
          <DemoSectionCopy />
        </DemoSection>
        <DemoSection scheme="tertiary">
          <DemoSectionCopy />
        </DemoSection>
      </Page.Content>
    </Page>
  );
}
