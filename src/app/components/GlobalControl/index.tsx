import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useThemeCTX } from '@/store';
import { Button, Title } from '@/common';
import { capitalizeString } from '@/utils';
import type { SurfaceToken } from '@/types/common';
import type { Accent, Avatar, Dir, Mode } from '@/types/store';

type ControlOptionProps = {
  value: Mode | Accent | Avatar | Dir;
  onChange(value: Mode | Accent | Avatar | Dir): void;
  surface?: SurfaceToken;
  label?: string;
};

function ControlOption(props: ControlOptionProps) {
  const { label, value, onChange, surface = 'primary' } = props;
  return (
    <Button
      onClick={() => onChange(value)}
      className="GlobalControlGroup-option"
      children={label || capitalizeString(value)}
      surface={surface}
    />
  );
}

type ControlGroupProps = {
  label?: string;
  options: ControlOptionProps[];
  surface?: SurfaceToken;
};

function ControlOptionGroup(props: ControlGroupProps) {
  const { label, options } = props;
  return (
    <div className="GlobalControlGroup">
      {label && (
        <Title className="GlobalControlGroup-title" size="xs">
          {label}
        </Title>
      )}

      <div className="GlobalControlGroup-options">
        {options?.map((option) => (
          <ControlOption
            key={option.value}
            label={option.label}
            value={option.value}
            surface={option.surface}
            onChange={option.onChange}
          />
        ))}
      </div>
    </div>
  );
}

const GlobalControlTheme = () => {
  const { state, setMode, setAccent, setAvatar, setDir } = useThemeCTX();
  const { accent, avatar, dir, mode } = state;
  console.log({ accent, avatar, dir, mode });

  return (
    <div className="GlobalControl-theme">
      <ControlOptionGroup
        label="Mode"
        options={[
          { value: 'light', label: 'Light Mode', onChange: () => setMode('light') },
          { value: 'dark', label: 'Dark Mode', onChange: () => setMode('dark') },
          { value: 'dim', label: 'Dim Mode', onChange: () => setMode('dim') },
        ]}
      />
      <ControlOptionGroup
        label="Direction"
        options={[
          { value: 'ltr', label: 'Right-to-Left', onChange: () => setDir('ltr') },
          { value: 'rtl', label: 'Left-to-Right', onChange: () => setDir('rtl') },
        ]}
      />
      <ControlOptionGroup
        label="Accent Color"
        options={[
          { value: 'orange', surface: 'orange', onChange: () => setAccent('orange') },
          { value: 'yellow', surface: 'yellow', onChange: () => setAccent('yellow') },
          { value: 'green', surface: 'green', onChange: () => setAccent('green') },
          { value: 'cyan', surface: 'cyan', onChange: () => setAccent('cyan') },
          { value: 'blue', surface: 'blue', onChange: () => setAccent('blue') },
          { value: 'indigo', surface: 'indigo', onChange: () => setAccent('indigo') },
          { value: 'purple', surface: 'purple', onChange: () => setAccent('purple') },
          { value: 'violet', surface: 'violet', onChange: () => setAccent('violet') },
          { value: 'magenta', surface: 'magenta', onChange: () => setAccent('magenta') },
          { value: 'pink', surface: 'pink', onChange: () => setAccent('pink') },
          { value: 'red', surface: 'red', onChange: () => setAccent('red') },
        ]}
      />
      <ControlOptionGroup
        label="Avatar Icon"
        options={[
          { value: 'baseball', surface: state.accent, onChange: () => setAvatar('baseball') },
          { value: 'basketball', surface: state.accent, onChange: () => setAvatar('basketball') },
          { value: 'beer', surface: state.accent, onChange: () => setAvatar('beer') },
          { value: 'bolt', surface: state.accent, onChange: () => setAvatar('bolt') },
          { value: 'code', surface: state.accent, onChange: () => setAvatar('code') },
          { value: 'coffee', surface: state.accent, onChange: () => setAvatar('coffee') },
          { value: 'dog', surface: state.accent, onChange: () => setAvatar('dog') },
          { value: 'film', surface: state.accent, onChange: () => setAvatar('film') },
          { value: 'football', surface: state.accent, onChange: () => setAvatar('football') },
          { value: 'heart', surface: state.accent, onChange: () => setAvatar('heart') },
          { value: 'music', surface: state.accent, onChange: () => setAvatar('music') },
          { value: 'palette', surface: state.accent, onChange: () => setAvatar('palette') },
          { value: 'person', surface: state.accent, onChange: () => setAvatar('person') },
          { value: 'pizza', surface: state.accent, onChange: () => setAvatar('pizza') },
          { value: 'puzzle', surface: state.accent, onChange: () => setAvatar('puzzle') },
          { value: 'robot', surface: state.accent, onChange: () => setAvatar('robot') },
          { value: 'shield', surface: state.accent, onChange: () => setAvatar('shield') },
          { value: 'smiley', surface: state.accent, onChange: () => setAvatar('smiley') },
          { value: 'soccer', surface: state.accent, onChange: () => setAvatar('soccer') },
          { value: 'star', surface: state.accent, onChange: () => setAvatar('star') },
          { value: 'trophy', surface: state.accent, onChange: () => setAvatar('trophy') },
        ]}
      />
    </div>
  );
};

const GlobalControlNav = ({ links }: { links: LinkProps[] }) => {
  return (
    <div className="GlobalControl-nav">
      {links.map((link) => (
        <Link className="GlobalControl-nav-item" key={link?.id} to={link.to}>
          {link.children}
        </Link>
      ))}
    </div>
  );
};

export const GlobalControl = () => {
  const [showContent, setShowContent] = React.useState<'theme' | 'nav' | null>(null);
  return (
    <div className="Page-container">
      <div className="GlobalControl-tabs">
        <Button onClick={() => setShowContent('nav')} children="Navigation" />
        <Button onClick={() => setShowContent('theme')} children="Theme" />
      </div>
      {showContent === 'theme' && <GlobalControlTheme />}
      {showContent === 'nav' && (
        <GlobalControlNav
          links={[
            { id: 'link-home', to: '/', children: 'Home' },
            { id: 'link-tool', to: '/toolbox', children: 'Toolbox' },
            { id: 'link-pref', to: '/preferences', children: 'Preferences' },
          ]}
        />
      )}
    </div>
  );
};
