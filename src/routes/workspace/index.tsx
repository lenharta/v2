import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps } from '@/app';

export interface WorkspaceRouteProps extends PageProps {}

export interface WorkspaceRouteComponents {}

export interface WorkspaceRouteComponent extends WorkspaceRouteComponents {
  (props: WorkspaceRouteProps): React.ReactNode;
  displayName: string;
}

export const Workspace: WorkspaceRouteComponent = (props) => {
  return (
    <Page {...props}>
      <Hero>
        <Title>Workspace</Title>
      </Hero>
      <Main>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, accusantium aperiam, ex
          itaque minima eos commodi quisquam a corrupti tempora earum quod dolorem sapiente
          possimus? Harum ducimus architecto similique iusto.
        </Text>
      </Main>
    </Page>
  );
};

Workspace.displayName = '@v2/Route.Workspace';
