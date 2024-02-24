import { Page, Section } from '@/app/layouts';
import { Button, Overlay, Stack, Text, Title } from '@/common';
import { useExhibit } from '@/hooks';

const overlayStyles: React.CSSProperties = {
  margin: '10em',
  padding: '10em',
  borderRadius: 12,
};

export const DemoCentered = () => {
  const [mounted, { show, remove }] = useExhibit(false);
  return (
    <div className="demo-display">
      <Button onClick={show}>Mount Overlay</Button>
      {!mounted ? null : (
        <Overlay center>
          <Stack gap="sm">
            <Title>Overlay Content</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas nisi asperiores quo
              a magnam, ea natus? Quidem ipsa et assumenda harum nihil blanditiis, dolorum provident
              temporibus unde deleniti porro mollitia.
            </Text>
            <Button onClick={remove}>Close Overlay</Button>
          </Stack>
        </Overlay>
      )}
    </div>
  );
};

export const DemoCenteredFixed = () => {
  const [mounted, { show, remove }] = useExhibit(false);
  return (
    <div className="demo-display">
      <Button onClick={show}>Mount Overlay</Button>
      {!mounted ? null : (
        <Overlay center fixed>
          <Stack gap="sm">
            <Title>Overlay Content</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas nisi asperiores quo
              a magnam, ea natus? Quidem ipsa et assumenda harum nihil blanditiis, dolorum provident
              temporibus unde deleniti porro mollitia.
            </Text>
            <Button onClick={remove}>Close Overlay</Button>
          </Stack>
        </Overlay>
      )}
    </div>
  );
};

export const DemoOverlay = () => {
  return (
    <Page>
      <Page.Hero title="Demo | Overlay" />
      <Page.Content>
        <Section>
          <DemoCentered />
          <DemoCenteredFixed />
        </Section>
      </Page.Content>
    </Page>
  );
};
