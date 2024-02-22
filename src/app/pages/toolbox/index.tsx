// import * as React from 'react';
import { Button, Overlay, Space, Stack, Text, Title } from '@/common';
import { Page, Section } from '@/app/layouts';
import { DemoControlDefault, DemoControlThemeState, DemoControlVertical } from './demos';
import { useExhibit } from '@/hooks';

export const OverlayDemo = () => {
  const [mounted, { show, remove }] = useExhibit(false);

  return (
    <>
      <Button onClick={show}>Mount Overlay</Button>

      {!mounted ? null : (
        <Overlay center fixed>
          <Stack
            gap="sm"
            style={{
              backgroundColor: 'rgba(var(--rgb-primary-surface), 0.06)',
              // marginInline: '12em',
              // marginBottom: '12em',
              // paddingInline: '10em',
              margin: '10em',
              padding: '10em',
              borderRadius: 12,
            }}
          >
            <Title>Overlay Content</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas nisi asperiores quo
              a magnam, ea natus? Quidem ipsa et assumenda harum nihil blanditiis, dolorum provident
              temporibus unde deleniti porro mollitia.
            </Text>

            <Button scheme="accent-high" onClick={remove}>
              Close Overlay
            </Button>
          </Stack>
        </Overlay>
      )}
    </>
  );
};

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section>
          <OverlayDemo />
          <DemoControlThemeState />
          <Space size="xs" />
          <DemoControlDefault />
          <Space size="xs" />
          <DemoControlVertical />
        </Section>
      </Page.Content>
    </Page>
  );
};
