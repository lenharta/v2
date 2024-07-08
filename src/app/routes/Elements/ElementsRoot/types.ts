type GalleryLinkItem = {
  id: string;
  value: string;
  label: string;
};

type GalleryGroupProps = {
  label: string;
  items?: GalleryLinkItem[] | undefined;
};

type GalleryItemProps = GalleryLinkItem & {};

type GalleryRootProps = {};

export type { GalleryLinkItem, GalleryItemProps, GalleryGroupProps, GalleryRootProps };
