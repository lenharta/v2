import { Page } from '@/app/layouts';
import { Button, Space, Title } from '@/common';
import {
  DATA_GLOBAL_CONTROL_GROUP_ACCENT,
  DATA_GLOBAL_CONTROL_GROUP_AVATAR,
  DATA_GLOBAL_CONTROL_GROUP_DIRECTION,
  DATA_GLOBAL_CONTROL_GROUP_THEME,
} from '@/data/common/data-global-control';
import { useThemeCTX } from '@/store';
import { capitalizeString } from '@/utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type ControlOption<T> = {
  value: T;
  surface?: any;
  label?: string;
};

type ControlGroup<T> = {
  options: ControlOption<T>[];
  surface?: any;
  label?: string;
};

type ControlTabKey = 'mode' | 'accent' | 'avatar' | 'dir' | 'nav';

type ControlPanel = { isMounted?: boolean; children?: React.ReactNode };

type ControlTabs = {
  keys: ControlTabKey[];
  activeKey: ControlTabKey | null;
  setActiveKey: (key: ControlTabKey | null) => void;
};

const GlobalControlGroup = <T extends string>(
  props: ControlGroup<T> & { onChange: (value: T) => void | (() => void) }
) => {
  const { label, options, surface, onChange } = props;
  return (
    <div className="GlobalControl-group">
      {label && <Title size="sm">{label}</Title>}

      <div className="GlobalControl-options">
        {options?.map((option) => (
          <Button
            onClick={() => onChange(option.value)}
            children={option.label || capitalizeString(option.value)}
            surface={option.surface || surface}
            size="xs"
          />
        ))}
      </div>
    </div>
  );
};

const GlobalControlPanel = (props: ControlPanel) => {
  const { children, isMounted } = props;
  if (!isMounted) return null;
  return <div className="GlobalControl-panel">{children}</div>;
};

const GlobalControlTabs = (props: ControlTabs) => {
  const { keys, setActiveKey } = props;
  return (
    <div className="GlobalControl-tabs">
      {keys.map((tabKey) => (
        <Button
          key={tabKey}
          onClick={() => setActiveKey(tabKey)}
          children={capitalizeString(tabKey)}
          size="xs"
        />
      ))}
      <Button children="Close" onClick={() => setActiveKey(null)} size="xs" />
    </div>
  );
};

export const GlobalControl = () => {
  const { state, setAccent, setAvatar, setMode, setDir } = useThemeCTX();
  const [activeKey, setActiveKey] = React.useState<ControlTabKey | null>(null);
  const navigate = useNavigate();

  return (
    <Page.Container>
      <Title size="md">Global Controls</Title>

      <div className="GlobalControl">
        <GlobalControlTabs
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          keys={['mode', 'accent', 'dir', 'avatar', 'nav']}
        />

        <GlobalControlPanel isMounted={activeKey === 'nav'}>
          <GlobalControlGroup
            label="Navigation"
            surface={state.accent}
            onChange={navigate}
            options={[
              { value: '/', label: 'Home' },
              { value: '/toolbox', label: 'Toolbox' },
              { value: '/preferences', label: 'Preferences' },
            ]}
          />
        </GlobalControlPanel>

        <GlobalControlPanel isMounted={activeKey === 'mode'}>
          <GlobalControlGroup
            {...DATA_GLOBAL_CONTROL_GROUP_THEME}
            surface={state.accent}
            onChange={setMode}
          />
        </GlobalControlPanel>

        <GlobalControlPanel isMounted={activeKey === 'accent'}>
          <GlobalControlGroup
            {...DATA_GLOBAL_CONTROL_GROUP_ACCENT}
            surface={state.accent}
            onChange={setAccent}
          />
        </GlobalControlPanel>

        <GlobalControlPanel isMounted={activeKey === 'dir'}>
          <GlobalControlGroup
            {...DATA_GLOBAL_CONTROL_GROUP_DIRECTION}
            surface={state.accent}
            onChange={setDir}
          />
        </GlobalControlPanel>

        <GlobalControlPanel isMounted={activeKey === 'avatar'}>
          <GlobalControlGroup
            {...DATA_GLOBAL_CONTROL_GROUP_AVATAR}
            surface={state.accent}
            onChange={setAvatar}
          />
        </GlobalControlPanel>
      </div>
    </Page.Container>
  );
};
