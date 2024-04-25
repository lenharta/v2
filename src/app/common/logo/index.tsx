import { factory } from '@/core/factory';
import { Factory } from '@/types';
import clsx from 'clsx';

export interface LogoProps {
  className?: string;
}

type LogoFactory = Factory.Config<{
  comp: 'svg';
  ref: SVGSVGElement;
  props: LogoProps;
}>;

export const Logo = factory<LogoFactory>((props, ref) => {
  const { className } = props;
  return (
    <svg
      ref={ref}
      fill="transparent"
      width="500"
      height="430"
      className={clsx('logo', className)}
      viewBox="0 0 500 430"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 430L249.186 0L285.288 61.8939L109.121 367.292H463.423L500 430H0Z"
        fill="currentColor"
      />
      <path
        d="M355.863 306.212H427.796L320.44 122.159L285.288 184.053L355.863 306.212Z"
        fill="currentColor"
      />
      <path d="M285.288 306.212L249.186 245.133L214.169 306.212H285.288Z" fill="currentColor" />
    </svg>
  );
});

Logo.displayName = '@v2/Logo';
