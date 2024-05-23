import clsx from 'clsx';
import { Factory } from '@/types';
import { factoryPolymorphic } from '@/core/factory';
import { Label } from '../Label';

interface LinkProps {
  label: string;
  inline?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

type LinkFactory = Factory.Config<{
  ref: HTMLAnchorElement;
  comp: 'a';
  props: LinkProps;
}>;

const Link = factoryPolymorphic<LinkFactory>((props, ref) => {
  const {
    label,
    inline,
    className,
    leftContent,
    rightContent,
    component: Component = 'a',
    ...forwardedProps
  } = props;

  return (
    <Component
      {...forwardedProps}
      ref={ref}
      aria-label={label}
      className={clsx(
        'v2-link',
        inline ? 'v2-link--inline' : undefined,
        !inline ? 'v2-link--default' : undefined
      )}
    >
      <span>
        {leftContent && <div>{leftContent}</div>}
        {label && <Label component="div">{label}</Label>}
        {rightContent && <div>{rightContent}</div>}
      </span>
    </Component>
  );
});

Link.displayName = '@v2/Link';
export { Link, type LinkProps };
