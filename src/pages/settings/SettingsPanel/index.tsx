import React from 'react';
import { Section } from '@/common';
import { Box, Text, Title } from '@/core';

type SettingsPanelFactory = React.FC<{
  children?: React.ReactNode;
  title?: string;
  text?: string;
}>;

const css = {
  root: 'v2-settings-panel',
  text: 'v2-settings-panel-text',
  title: 'v2-settings-panel-title',
  header: 'v2-settings-panel-header',
  content: 'v2-settings-panel-content',
};

const SettingsPanel: SettingsPanelFactory = (props) => {
  const { children, text, title } = props;
  return (
    <Section className={css.root}>
      <Box component="header" className={css.header}>
        {title && (
          <Title className={css.title} h2>
            {title}
          </Title>
        )}
        {text && <Text className={css.text}>{text}</Text>}
      </Box>

      <Box className={css.content}>{children}</Box>
    </Section>
  );
};

SettingsPanel.displayName = '@v2/Settings.Panel';
export { SettingsPanel };
