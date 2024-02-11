export type PageHeroRootProps = {
  title?: React.ReactNode;
};

export type PageHeroTitleProps = {
  title?: React.ReactNode;
};

export type PageHeroBaseProps = {
  Root: Omit<React.JSX.IntrinsicElements['div'], 'children'> & PageHeroRootProps;
  Title: Omit<React.JSX.IntrinsicElements['h1'], 'children'> & PageHeroTitleProps;
};

export type PageHeroProps = {
  Root: PageHeroBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
  Title: PageHeroBaseProps['Title'] & React.RefAttributes<HTMLHeadingElement>;
};

export type PageHeroComponents = {
  Root: React.FC<PageHeroProps['Root']>;
  Title: React.ForwardRefExoticComponent<PageHeroProps['Title']>;
};

export type PageHeroRootComponent = PageHeroComponents['Root'] & {
  Title: PageHeroComponents['Title'];
};
