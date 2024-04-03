import { Core, factory } from '@/core/factory';

export interface ExternalLinkProps {}

export type ExternalLinkFactory = Core.Factory<{
  ref: HTMLAnchorElement;
  comp: 'a';
  props: ExternalLinkProps;
}>;

export const ExternalLink = factory((props, ref) => {
  const { children, href = '#', ...otherProps } = props;
  return (
    <a {...otherProps} ref={ref} href={href}>
      {children}
    </a>
  );
});

ExternalLink.displayName = '@v2/core/ExternalLink';
