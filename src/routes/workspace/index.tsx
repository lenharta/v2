import * as React from 'react';
import { Title } from '@/core';
import { Hero, Main, Page, PageProps, Section } from '@/app';

export type WorkspaceRouteProps = PageProps & {};

export type WorkspaceRouteComponent = {
  (props: WorkspaceRouteProps): React.ReactNode;
  displayName?: string;
};

// const CheckboxGroupDemo = () => {
//   const [value, setValue] = React.useState<string[]>([]);
//   return (
//     <Checkbox.Group value={value} onChange={setValue}>
//       <Checkbox value="opt-apple" label="Apple" />
//       <Checkbox value="opt-banana" label="Banana" />
//       <Checkbox value="opt-blueberry" label="Blueberry" />
//       <Checkbox value="opt-orange" label="Orange" />
//       <Checkbox value="opt-peach" label="Peach" />
//       <Checkbox value="opt-strawberry" label="Strawberry" />
//     </Checkbox.Group>
//   );
// };

// const CheckboxDemo = () => {
//   const [checked, setChecked] = React.useState(false);
//   return (
//     <React.Fragment>
//       <Checkbox
//         checked={checked}
//         onChange={(event) => setChecked(event.currentTarget.checked)}
//         label="Single Checkbox Label"
//       />
//     </React.Fragment>
//   );
// };

export const Workspace: WorkspaceRouteComponent = (props) => {
  return (
    <Page {...props}>
      <Hero>
        <Title>Workspace</Title>
      </Hero>
      <Main>
        <Section>{/* <Demo /> */}</Section>
      </Main>
    </Page>
  );
};

Workspace.displayName = '@v2/Route.Workspace';
