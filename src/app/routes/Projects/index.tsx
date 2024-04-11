import { Page } from '@/app/page';
import { Title } from '@/core';

type ProjectsRouteComponent = React.FC<{}>;

export const Projects: ProjectsRouteComponent = ({}) => {
  return (
    <Page>
      <Page.Hero>
        <Title>Projects Route</Title>
      </Page.Hero>
      <Page.Content></Page.Content>
      <Page.Footer></Page.Footer>
    </Page>
  );
};

Projects.displayName = '@v2/app/Route.Projects';
