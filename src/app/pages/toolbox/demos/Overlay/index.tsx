import { Button, Overlay, Stack, Text, Title } from '@/common';
import { useExhibit } from '@/hooks';

const overlayStyles: React.CSSProperties = {
  margin: '10em',
  padding: '10em',
  borderRadius: 12,
};

export const DemoOverlayFixedCenter = () => {
  const [mounted, { show, remove }] = useExhibit(false);
  return (
    <>
      <Button onClick={show}>Mount Overlay</Button>
      {!mounted ? null : (
        <Overlay center fixed>
          <Stack gap="sm" style={{ ...overlayStyles }}>
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
    </>
  );
};
