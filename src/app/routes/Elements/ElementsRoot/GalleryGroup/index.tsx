import { Divider } from '@/core';
import { GalleryItem } from '../GalleryItem';
import { GalleryGroupProps } from '../types';

type GalleryGroupFactory = React.FC<GalleryGroupProps> & {};

const GalleryGroup: GalleryGroupFactory = (props) => {
  const { label, items } = props;
  return (
    <ul className="v2-elements-gallery-group">
      <Divider label={label} />
      {(items || []).map((item) => (
        <GalleryItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

GalleryGroup.displayName = '@v2/Elements.Gallery.Group';
export { GalleryGroup };
