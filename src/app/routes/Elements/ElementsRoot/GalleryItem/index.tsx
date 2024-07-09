import { UnstyledLink } from '@/core';
import { GalleryItemProps } from '../types';

type GalleryItemFactory = React.FC<GalleryItemProps> & {};

const GalleryItem: GalleryItemFactory = (props) => {
  const { id, value, label } = props;
  return (
    <li className="v2-elements-gallery-item">
      <UnstyledLink id={id} to={value} children={label} />
    </li>
  );
};

GalleryItem.displayName = '@v2/Elements.Gallery.Item';
export { GalleryItem };
