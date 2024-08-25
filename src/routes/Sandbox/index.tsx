import * as React from 'react';

import { Page } from '@app';
// import { useClassNames } from '@core/hooks';
import { SandboxHero } from './SandboxHero';

// type ClassElements = 'root' | 'text' | 'title' | 'layout';

// type SandboxClassNamesProps = {
//   classNames?: Partial<Core.ClassNames<ClassElements>>;
//   className?: string;
// };

// const css: Core.ClassNames<ClassElements> = {
//   root: 'demo demo-root',
//   text: 'demo-text',
//   title: 'demo-title',
//   layout: 'demo-layout',
// };

// const testClassNames = {
//   a: 'button',
//   b: 'button button-label',
//   c: 'button button--primary button--xs button--secondary',
// };

// const SandboxClassNames: React.FC<SandboxClassNamesProps> = (props) => {
//   const { className, classNames } = props;

//   const cx = useClassNames(css, { classNames, className });

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       {(Object.keys(cx) as ClassElements[]).map((className) => (
//         <div key={className} className={cx.root}>
//           <span>
//             {className} | {cx[className]}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

type SandboxFactory = React.FC<{}> & {
  Hero: typeof SandboxHero;
  // ClassNames: typeof SandboxClassNames;
};

const Sandbox: SandboxFactory = ({}) => (
  <Page>
    <Sandbox.Hero />
    {/* <Sandbox.ClassNames /> */}
  </Page>
);

Sandbox.Hero = SandboxHero;
// Sandbox.ClassNames = SandboxClassNames;
Sandbox.displayName = '@v2/Sandbox.Route';
export { Sandbox };
