import { Page, Section } from '@/app/layouts';
import { Button, Dropdown } from '@/common';
import { useExhibit } from '@/hooks';

const DemoControlledState = () => {
  const [mounted, { toggle }] = useExhibit(false);
  return (
    <Dropdown isOpen={mounted} onOpenChange={toggle}>
      <Dropdown.Target>
        <Button>Target</Button>
      </Dropdown.Target>

      <Dropdown.Box>
        <div>Item #1</div>
        <div>Item #2</div>
        <div>Item #3</div>
        <div>Item #4</div>
        <div>Item #5</div>
      </Dropdown.Box>
    </Dropdown>
  );
};

const DemoOpenCloseHandlers = () => {
  const [mounted, { toggle }] = useExhibit(false);
  return (
    <Dropdown
      isOpen={mounted}
      onOpenChange={toggle}
      onOpen={() => console.log('Dropdown opened!')}
      onClose={() => console.log('Dropdown closed!')}
    >
      <Dropdown.Target>
        <Button>Target</Button>
      </Dropdown.Target>

      <Dropdown.Box>
        <div>Item #1</div>
        <div>Item #2</div>
        <div>Item #3</div>
        <div>Item #4</div>
        <div>Item #5</div>
      </Dropdown.Box>
    </Dropdown>
  );
};

const DemoTargetProps = () => {
  const [mounted, { toggle }] = useExhibit(false);
  return (
    <Dropdown isOpen={mounted} onOpenChange={toggle}>
      <Dropdown.Target>
        <Button onClick={(e) => console.log(e)}>Target</Button>
      </Dropdown.Target>

      <Dropdown.Box>
        <div>Item #1</div>
        <div>Item #2</div>
        <div>Item #3</div>
        <div>Item #4</div>
        <div>Item #5</div>
      </Dropdown.Box>
    </Dropdown>
  );
};

export const DemoDropdown = () => {
  return (
    <Page>
      <Page.Hero title="Demo | Dropdown" />
      <Page.Content>
        <Section>
          <DemoControlledState />
          <DemoOpenCloseHandlers />
          <DemoTargetProps />
        </Section>
      </Page.Content>
    </Page>
  );
};
