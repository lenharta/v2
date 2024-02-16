import * as React from 'react';
import { Page } from '@/app/layouts';
import { Button, IconName } from '@/common';
import { Core } from '@/types/core';

type TabGroupContextValue = {
  size: 'sm' | 'md' | 'lg';
};

export const TabGroupContext = React.createContext({});
export const TabGroupProvider = TabGroupContext.Provider;
export const useTabGroupCTX = () => React.useContext(TabGroupContext);

export type TabProps = {
  label: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export type TabFactory = Core.RefFactory<{
  ref: HTMLButtonElement;
  props: TabProps;
  component: 'button';
}>;

const Tab: TabFactory = React.forwardRef((props, ref) => {
  const { label, leftContent, rightContent, ...otherProps } = props;
  return (
    <button {...otherProps} ref={ref} aria-label={label}>
      {leftContent && <div data-position="left">{leftContent}</div>}
      <div>{label}</div>
      {rightContent && <div data-position="right">{rightContent}</div>}
    </button>
  );
});

export type TabGroupProps = {};

export type TabGroupFactory = Core.BaseFactory<{
  props: TabGroupProps;
  component: 'div';
}>;

const TabGroup: TabGroupFactory = (props) => {
  const { children, ...otherProps } = props;
  return <div {...otherProps}>{children}</div>;
};

const TabGroupDemo = () => {};

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content></Page.Content>
    </Page>
  );
};
