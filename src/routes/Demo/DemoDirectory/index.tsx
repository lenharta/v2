import * as React from 'react';
import { Page } from '@app';
import { Divider, Stack, UnstyledLink } from '@core';
import { DemoHero } from '../DemoHero';
import { DemoIntro } from '../DemoIntro';

interface DirectoryGroupProps {
  group: {
    id: string;
    label: string;
  };
  items: {
    id: string;
    path: string;
    label: string;
  }[];
}

type DemoDirectoryFactory = React.FC<{}> & {
  Group: React.FC<DirectoryGroupProps>;
};

const DemoDirectoryGroup: DemoDirectoryFactory['Group'] = (props) => {
  const { group, items } = props;
  return (
    <Stack className="v2-demo-directory-group" id={group.id} gap="sm">
      <Divider label={group.label} />
      {items.map((item) => (
        <UnstyledLink rel="noopener" key={item.id} id={item.id} to={item.path}>
          {item.label}
        </UnstyledLink>
      ))}
    </Stack>
  );
};

const DemoDirectory: DemoDirectoryFactory = ({}) => {
  return (
    <React.Fragment>
      <DemoHero />
      <DemoIntro />
      <Page.Section className="v2-demo-directory">
        <div className="v2-demo-directory-layout">
          <DemoDirectory.Group
            group={{ id: 'button-components', label: 'Buttons' }}
            items={[
              { id: 'demo-button-link', label: 'Button', path: '/demo/button' },
              { id: 'demo-action-link', label: 'Action', path: '/demo/action' },
              { id: 'demo-icon-btn-link', label: 'Icon Button', path: '/demo/icon-btn' },
              { id: 'demo-tool-btn-link', label: 'Tool Button', path: '/demo/tool-btn' },
            ]}
          />

          <DemoDirectory.Group
            group={{ id: 'misc-components', label: 'Miscellaneous' }}
            items={[
              { id: 'demo-icon-link', label: 'Icon', path: '/demo/icon' },
              { id: 'demo-text-link', label: 'Text', path: '/demo/text' },
              { id: 'demo-title-link', label: 'Title', path: '/demo/title' },
              { id: 'demo-stack-link', label: 'Stack', path: '/demo/stack' },
              { id: 'demo-image-link', label: 'Image', path: '/demo/image' },
            ]}
          />

          <DemoDirectory.Group
            group={{ id: 'input-components', label: 'Inputs' }}
            items={[
              { id: 'demo-radio-link', label: 'Radio', path: '/demo/radio' },
              { id: 'demo-toggle-link', label: 'Toggle', path: '/demo/toggle' },
              { id: 'demo-control-link', label: 'Control', path: '/demo/control' },
              { id: 'demo-checkbox-link', label: 'Checkbox', path: '/demo/checkbox' },
            ]}
          />
        </div>
      </Page.Section>
    </React.Fragment>
  );
};

DemoDirectory.Group = DemoDirectoryGroup;
DemoDirectory.Group.displayName = '@v2/Demo.Directory.Group';
DemoDirectory.displayName = '@v2/Demo.Directory';
export { DemoDirectory };
