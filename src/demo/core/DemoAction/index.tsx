import React from 'react';
import { Section } from '@/common';
import { Action, Icon } from '@/core';

const DemoAction = () => {
  return (
    <React.Fragment>
      <Section>
        <Action.Group>
          <Action label="action button" icon={<Icon name="account" />} />
          <Action label="action button" icon={<Icon name="account" />} />
          <Action label="action button" icon={<Icon name="account" />} disabled />
          <Action label="action button" icon={<Icon name="account" />} />
        </Action.Group>
      </Section>
    </React.Fragment>
  );
};

export { DemoAction };
