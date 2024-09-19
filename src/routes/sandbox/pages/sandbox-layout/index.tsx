import * as React from 'react';
import * as Router from 'react-router-dom';
import { Demo } from '@/demo';
import { DEMO, ICON } from '@/types';
import { Icon, Label, Title } from '@/core';
import { Hero, Main, useStore } from '@/app';
import clsx from 'clsx';

export type SandboxLayoutProps = {
  containerStyle?: React.CSSProperties;
  controls: DEMO.ControlOptions[];
  children: React.ReactNode;
  name: string;
  href: string;
};

type SandboxNavLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  component?: typeof Router.Link | 'a';
  iconRight?: Partial<ICON.Props>;
  iconLeft?: Partial<ICON.Props>;
  label?: string;
  href?: string;
};

type SandboxNavLinkComponent = {
  (props: SandboxNavLinkProps): React.JSX.Element;
  displayName?: string;
};

export const SandboxNavLink: SandboxNavLinkComponent = ({
  label,
  iconLeft,
  iconRight,
  component,
  ...props
}) => {
  let Component: React.ElementType = component || 'a';
  let ComponentProps = {};

  if (Component === 'a') {
    ComponentProps = {
      ...props,
      rel: 'noopener',
      href: props.href,
      target: '_blank',
    };
  }

  if (Component !== 'a') {
    ComponentProps = {
      ...props,
      to: props.href || '/',
    };
  }

  return (
    <Component
      {...ComponentProps}
      aria-label={label}
      className={clsx(
        'v2-sandbox-nav-item',
        { [`v2-sandbox-nav-item--external`]: Component === 'a' },
        { [`v2-sandbox-nav-item--internal`]: Component !== 'a' }
      )}
    >
      <span className="v2-sandbox-nav-item-layout">
        {iconLeft && <Icon {...iconLeft} />}
        <Label component="div">{label}</Label>
        {iconRight && <Icon {...iconRight} />}
      </span>
    </Component>
  );
};

type SandboxNavComponent = {
  (props: { href: string }): React.JSX.Element;
};

export const SandboxNav: SandboxNavComponent = (props) => {
  const { href } = props;

  const store = useStore();

  const iconProps = { type: store.icons };

  return (
    <nav className="v2-sandbox-nav">
      <SandboxNavLink
        component={Router.Link}
        iconLeft={{ ...iconProps, name: 'arrow-west' }}
        label="Go Back"
        href="/sandbox"
      />

      <SandboxNavLink
        component="a"
        iconLeft={{ ...iconProps, name: 'arrow-northeast' }}
        label="Source Code"
        href={href}
      />
    </nav>
  );
};

export const SANDBOX_META = {
  default: 'https://github.com/lenharta',
  accordion: 'https://github.com/lenharta/v2/tree/main/src/core/components/Accordion',
  action: 'https://github.com/lenharta/v2/tree/main/src/core/components/Action',
  button: 'https://github.com/lenharta/v2/tree/main/src/core/components/Button',
  checkbox: 'https://github.com/lenharta/v2/tree/main/src/core/components/Checkbox',
  control: 'https://github.com/lenharta/v2/tree/main/src/core/components/Control',
  select: 'https://github.com/lenharta/v2/tree/main/src/core/components/Select',
  switch: 'https://github.com/lenharta/v2/tree/main/src/core/components/Switch',
  tabs: 'https://github.com/lenharta/v2/tree/main/src/core/components/Tabs',
};

export const SandboxLayout = (props: SandboxLayoutProps) => {
  const { children, controls, containerStyle, name, href = SANDBOX_META.default } = props;
  return (
    <React.Fragment>
      <Hero>
        <Title h1>
          Sandbox | <span className="v2-accent-text">{name}</span>
        </Title>
      </Hero>
      <Main className="v2-sandbox-layout-main">
        <Demo containerStyle={containerStyle} controls={controls}>
          {children}
        </Demo>
        <SandboxNav href={href} />
      </Main>
    </React.Fragment>
  );
};
