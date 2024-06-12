interface HeroProps {
  title?: React.ReactNode | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

interface HeroTitleProps {
  title?: React.ReactNode | undefined;
}
export type { HeroProps, HeroTitleProps };
