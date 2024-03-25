import { Page } from '@/app/components';
import { Subtitle, Text } from '@/common';

export const HomeTimeline = () => {
  return (
    <Page.Section className="home-sec-timeline" surface={{ type: 'primary-0', state: 'base' }}>
      <Subtitle>Timeline</Subtitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus hic qui alias
        doloremque nostrum, veniam vel tempora ex sint quos consequuntur totam possimus officia
        voluptates, tenetur sed officiis perspiciatis?
      </Text>
    </Page.Section>
  );
};
