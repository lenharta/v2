import { Button } from '@/core';
import { useThemeDispatch } from '@/store';

export const DemoThemeMode = () => {
  const { setMode } = useThemeDispatch();
  return (
    <div>
      <Button.Group>
        <Button onClick={() => setMode('light')}>Light</Button>
        <Button onClick={() => setMode('dark')}>Dark</Button>
        <Button onClick={() => setMode('dim')}>Dim</Button>
      </Button.Group>
    </div>
  );
};
