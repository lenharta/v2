import { Size } from '@/types';
import { LinkProps } from 'react-router-dom';

export type AvatarProps = LinkProps & { component?: 'a'; size?: Size };

export type AvatarBaseProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export type AvatarComponent = React.ForwardRefExoticComponent<
  AvatarBaseProps & AvatarProps & React.RefAttributes<HTMLAnchorElement>
>;
