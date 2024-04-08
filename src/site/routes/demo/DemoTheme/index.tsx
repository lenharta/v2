import { Button } from '@/core';
import { Section } from '@/site/components';
import { useThemeDispatch } from '@/store';

export const DemoThemeMode = () => {
  const { setMode } = useThemeDispatch();
  return (
    <Section className="sec-construction-box">
      <Section.Content className="sec-construction-box-content">
        <Button.Group>
          <Button onClick={() => setMode('light')}>Light</Button>
          <Button onClick={() => setMode('dark')}>Dark</Button>
          <Button onClick={() => setMode('dim')}>Dim</Button>
        </Button.Group>
      </Section.Content>
    </Section>
  );
};
