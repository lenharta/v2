import { Page } from '@/app';
import { GalleryGroup } from '../GalleryGroup';
import { GalleryLinkItem, GalleryRootProps } from '../types';

type GalleryFactory = React.FC<GalleryRootProps> & {
  Group: typeof GalleryGroup;
};

const data: {
  group: { id: string; label: string };
  items: GalleryLinkItem[];
}[] = [
  {
    group: { id: 'typography', label: 'Typography' },
    items: [
      {
        id: 'element:core:text',
        value: '/elements/text',
        label: 'Text',
      },
      {
        id: 'element:core:label',
        value: '/elements/label',
        label: 'Label',
      },
      {
        id: 'element:core:title',
        value: '/elements/title',
        label: 'Title',
      },
    ],
  },
  {
    group: { id: 'buttons', label: 'Buttons' },
    items: [
      {
        id: 'element:core:button',
        value: '/elements/button',
        label: 'Button',
      },
      {
        id: 'element:core:action',
        value: '/elements/action',
        label: 'Action',
      },
    ],
  },
  {
    group: { id: 'inputs', label: 'Inputs & Data' },
    items: [
      {
        id: 'element:core:accordion',
        value: '/elements/Accordion',
        label: 'Accordion',
      },
      {
        id: 'element:core:select',
        value: '/elements/select',
        label: 'Select',
      },
      {
        id: 'element:core:control',
        value: '/elements/control',
        label: 'Control',
      },
    ],
  },
  {
    group: { id: 'layout', label: 'Layout & Display' },
    items: [
      {
        id: 'element:core:divider',
        value: '/elements/divider',
        label: 'Divider',
      },
      {
        id: 'element:core:stack',
        value: '/elements/stack',
        label: 'Stack',
      },
      {
        id: 'element:core:group',
        value: '/elements/group',
        label: 'Group',
      },
    ],
  },
];

const Gallery: GalleryFactory = (props) => {
  const {} = props;
  return (
    <Page.Section>
      <div className="v2-elements-gallery-layout">
        {data.map(({ group, items }) => (
          <Gallery.Group key={group.id} label={group.label} items={items} />
        ))}
      </div>
    </Page.Section>
  );
};

Gallery.Group = GalleryGroup;
Gallery.displayName = '@v2/Elements.Gallery';
export { Gallery };
