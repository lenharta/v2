import { Page } from '@/app/layouts';
import { HomeHero } from './hero';
import { HomeOverview } from './overview';

// Think Freely, Open Minds, <span className="accent">Create With Courage,</span>

// I develop accessible digital experiences for the modern world.

const HomeKeynote = () => {
  return (
    <section className="home-sec-keynote-root">
      <div className="home-sec-keynote-left">
        <div className="home-sec-keynote-left-content">
          <span>01</span>
          <h2>Keynote Title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus distinctio sint iste
            incidunt pariatur, enim alias reiciendis consequatur possimus neque autem fugit at
            ratione exercitationem sapiente officiis ipsum. Temporibus, itaque.
          </p>
        </div>
      </div>
      <div className="home-sec-keynote-center">
        <div className="home-sec-keynote-center-content">
          <span>02</span>
          <h2>Keynote Title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus distinctio sint iste
            incidunt pariatur, enim alias reiciendis consequatur possimus neque autem fugit at
            ratione exercitationem sapiente officiis ipsum. Temporibus, itaque.
          </p>
        </div>
      </div>
      <div className="home-sec-keynote-right">
        <div className="home-sec-keynote-right-content">
          <span>03</span>
          <h2>Keynote Title</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus distinctio sint iste
            incidunt pariatur, enim alias reiciendis consequatur possimus neque autem fugit at
            ratione exercitationem sapiente officiis ipsum. Temporibus, itaque.
          </p>
        </div>
      </div>
    </section>
  );
};

const HomeTimeline = () => {
  return (
    <section className="home-sec-timeline-root">
      <div className="home-sec-timeline-left"></div>
      <div className="home-sec-timeline-right"></div>
    </section>
  );
};

export const Home = () => {
  return (
    <Page>
      <HomeHero />
      <HomeOverview />
      {/* <Page.Content>
      </Page.Content> */}
    </Page>
  );
};
