import { Page, Section } from '@/app/layouts';
import { Button } from '@/common';
import { Outlet, useNavigate } from 'react-router-dom';

const DemoDirectory = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <nav>
        <Button onClick={() => navigate('/demo/animation')}>Animation</Button>
        <Button onClick={() => navigate('/demo/checkbox')}>Checkbox</Button>
        <Button onClick={() => navigate('/demo/control')}>Control</Button>
        <Button onClick={() => navigate('/demo/dropdown')}>Dropdown</Button>
        <Button onClick={() => navigate('/demo/overlay')}>Overlay</Button>
      </nav>
    </Section>
  );
};

export const Demo = () => {
  return (
    <Page>
      <Page.Hero title="Demo" />
      <Page.Content>
        <DemoDirectory />
        <Outlet />
      </Page.Content>
    </Page>
  );
};
