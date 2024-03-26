import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface PageProps extends ElementProps<'div'> {
  children?: React.ReactNode | undefined;
}

export interface PageHeroProps extends Omit<ElementProps<'div'>, 'title'> {
  variant?: 'default' | 'basic' | undefined;
  children?: React.ReactNode | undefined;
  subtitle?: React.ReactNode | undefined;
  title?: React.ReactNode | undefined;
}

export interface PageLayoutProps extends ElementProps<'div'> {
  variant?: 'default' | 'screen' | undefined;
  children?: React.ReactNode | undefined;
}

export interface PageContentProps extends ElementProps<'div'> {
  children?: React.ReactNode | undefined;
}

export type PageHeroRenderType = ExoticRender<HTMLDivElement, PageHeroProps>;
export type PageLayoutRenderType = ExoticRender<HTMLDivElement, PageLayoutProps>;
export type PageContentRenderType = ExoticRender<HTMLDivElement, PageContentProps>;

export type PageHeroComponentType = ExoticComponent<HTMLDivElement, PageHeroProps>;
export type PageLayoutComponentType = ExoticComponent<HTMLDivElement, PageLayoutProps>;
export type PageContentComponentType = ExoticComponent<HTMLDivElement, PageContentProps>;

export interface PageComponentType extends React.FC<PageProps> {
  Hero: PageHeroComponentType;
  Layout: PageLayoutComponentType;
  Content: PageContentComponentType;
}
