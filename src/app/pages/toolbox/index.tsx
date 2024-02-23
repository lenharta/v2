import * as React from 'react';
import { Button, Dropdown, Overlay, Space, Stack, Text, Title } from '@/common';
import { Page, Section } from '@/app/layouts';
import { useExhibit } from '@/hooks';

export interface Point2D {
  x: number;
  y: number;
}

export const distance = (a: number, b: number) => Math.abs(a - b);

export const distance2D = (a: Point2D, b: Point2D) => {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
};

const DropdownDemo = () => {
  const [mounted, { toggle }] = useExhibit();
  return (
    <div>
      <Dropdown isOpen={mounted} onOpenChange={toggle}>
        <Dropdown.Target>
          <Button className="demo-dropdown-target">Dropdown Target</Button>
        </Dropdown.Target>
        <Dropdown.Box>
          <div className="demo-dropdown-box">
            <div>Example Item</div>
            <div>Example Item</div>
            <div>Example Item</div>
            <div>Example Item</div>
            <div>Example Item</div>
          </div>
        </Dropdown.Box>
      </Dropdown>
    </div>
  );
};

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section>
          <Space size="xl" />
          <Space size="xl" />
          <Space size="xl" />
          <DropdownDemo />
          <Space size="xl" />
          <Space size="xl" />
          <Space size="xl" />
        </Section>
      </Page.Content>
    </Page>
  );
};
