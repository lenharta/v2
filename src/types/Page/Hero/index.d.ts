export type PageHeroProps = {
  title?: React.ReactNode;
};

export type PageHeroBaseProps = React.DetailedHTMLProps<
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
  HTMLDivElement
>;

export type PageHeroExoticComponent = React.ForwardRefExoticComponent<
  PageHeroBaseProps & PageHeroProps & React.RefAttributes<HTMLDivElement>
>;

export type PageHeroComponent = PageHeroExoticComponent;
