import { Action, Icon } from '@/core';

const DemoAction = () => {
  return <Action label="action button" icon={<Icon name="account" />} />;
};

const DemoActionGroup = () => (
  <Action.Group>
    <Action label="action button" icon={<Icon name="account" />} />
    <Action label="action button" icon={<Icon name="account" />} />
    <Action label="action button" icon={<Icon name="account" />} disabled />
    <Action label="action button" icon={<Icon name="account" />} />
  </Action.Group>
);

export { DemoAction, DemoActionGroup };
