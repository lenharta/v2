import { Text, Title } from '@/core';
import { Hero, Main, Page, PageProps } from '@/app';

export interface HomeRouteProps extends PageProps {}

export interface HomeRouteComponents {}

export interface HomeRouteComponent extends HomeRouteComponents {
  (props: HomeRouteProps): React.ReactNode;
  displayName: string;
}

export const Home: HomeRouteComponent = (props) => {
  return (
    <Page {...props}>
      <Hero>
        <Title>Home</Title>
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

Home.displayName = '@v2/Route.Home';
