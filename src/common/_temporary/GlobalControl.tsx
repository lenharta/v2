import { Button, Title } from '@/common';
import { useThemeCTX } from '@/store';
import { Accent, Avatar, Mode, SurfaceToken } from '@/types';

type GlobalControlValue = Accent | Mode | Avatar;

type GlobalControlOption = {
  label: string;
  value: GlobalControlValue;
  surface: SurfaceToken;
  onChange(value: GlobalControlValue): void;
};

const capitalize = (string: string) => {
  const clean = string.toLowerCase();
  const char = clean.charAt(0).toUpperCase();
  return char + clean.slice(1, string.length);
};

export const GlobalControlOption = (props: GlobalControlOption) => {
  const { surface = 'primary', value, label, onChange } = props;
  const modes = ['light', 'dark', 'dim'];

  const formatOptionLabel = () => {
    if (modes.includes(value)) {
      return [capitalize(value), 'Mode'].join(' ');
    }
    return capitalize(value);
  };

  return (
    <Button
      surface={surface}
      onClick={() => onChange(value)}
      children={formatOptionLabel()}
      className="GlobalControlOption"
      aria-label={label}
    />
  );
};

type GlobalControlOptionGroup = {
  label: string;
  surface: SurfaceToken;
  options: GlobalControlValue[];
  onChange(value: GlobalControlValue): void;
};

export const GlobalControlGroup = (props: GlobalControlOptionGroup) => {
  const { label, options, onChange, surface } = props;
  return (
    <div className="GlobalControlGroup">
      <Title size="xs">{label}</Title>
      {options.map((value) => (
        <GlobalControlOption
          key={value}
          value={value}
          label={value}
          surface={surface}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export const GlobalControlNav = () => {
  return <div className="GlobalControlNav"></div>;
};

export const GlobalControl = () => {
  const { state } = useThemeCTX();
  return <div className="GlobalControl"></div>;
};
