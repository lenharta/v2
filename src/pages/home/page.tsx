import { Button } from '@/common';
import React from 'react';

export interface PageProps {
  children?: React.ReactNode;
}

export interface PageHeroProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

export interface PageContentProps {
  children?: React.ReactNode;
}

export interface PageSectionProps {
  children?: React.ReactNode;
}

export interface TitleProps {
  children?: React.ReactNode;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Title(props: TitleProps) {
  const { component: Component = 'h2', children } = props;
  return <Component>{children}</Component>;
}

export function Page({ children }: PageProps) {}
export function PageHero({ children, title }: PageHeroProps) {
  return (
    <div className="page-hero">
      {title && <h1 className="page-title">{title}</h1>}
      {children}
    </div>
  );
}
export function PageContent({ children }: PageContentProps) {}
export function PageSection({ children }: PageSectionProps) {}

export function Home() {
  return (
    <div data-prefers-color-scheme="dark" className="page">
      <div className="page-hero">
        <div className="page-container"></div>
      </div>
      <main className="page-content">
        <section className="page-section">
          <div className="page-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi asperiores commodi
              tempore? Quod quos iusto pariatur facere quasi minima voluptatem saepe nam quaerat
              consectetur? Ipsa neque nostrum ducimus necessitatibus obcaecati!
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Button size="xs">Button</Button>
              <Button size="sm">Button</Button>
              <Button size="md">Button</Button>
              <Button size="lg">Button</Button>
              <Button size="xl">Button</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
