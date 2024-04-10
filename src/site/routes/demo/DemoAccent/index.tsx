import { Button } from '@/core';
import { useThemeDispatch } from '@/store';
import { capitalizeString } from '@/utils';
import { dataStoreAccentColors } from '@/data';

export const DemoAccentMode = () => {
  const { setAccent } = useThemeDispatch();
  return (
    <div>
      {dataStoreAccentColors.map((color) => (
        <Button.Group>
          <Button
            key={color}
            value={color}
            onClick={(event) => {
              event.stopPropagation();
              setAccent(color);
            }}
          >
            {capitalizeString(color)}
          </Button>
        </Button.Group>
      ))}
    </div>
  );
};
