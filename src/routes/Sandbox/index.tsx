import * as React from 'react';

import { Page } from '@app';
import { useClxss } from '@core/hooks';
import { SandboxHero } from './SandboxHero';
import { Core } from '@types';

type ClxssElements = 'root' | 'text' | 'title' | 'layout';

type SandboxClassNamesProps = {
  classNames?: Partial<Core.Clxss<ClxssElements>>;
  className?: string;
};

const css: Core.Clxss<ClxssElements> = {
  root: 'demo',
  text: 'demo-text',
  title: 'demo-title',
  layout: 'demo-layout',
};

const testClassNames = {
  a: 'button',
  b: 'button button-label',
  c: 'button button--primary button--xs button--secondary',
};

const SandboxClassNames: React.FC<SandboxClassNamesProps> = (props) => {
  const { className, classNames } = props;

  const cx = useClxss(css, { classNames, className });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {(Object.keys(cx) as ClxssElements[]).map((className) => (
        <div key={className}>
          <span>
            {className} | {cx[className]}
          </span>
        </div>
      ))}
    </div>
  );
};

type SandboxFactory = React.FC<{}> & {
  Hero: typeof SandboxHero;
  ClassNames: typeof SandboxClassNames;
};

const Sandbox: SandboxFactory = ({}) => (
  <Page>
    <Sandbox.Hero />
    <Sandbox.ClassNames />
  </Page>
);

Sandbox.Hero = SandboxHero;
Sandbox.ClassNames = SandboxClassNames;
Sandbox.displayName = '@v2/Sandbox.Route';
export { Sandbox };
