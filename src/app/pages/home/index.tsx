import { Page, Section } from '@/app/layouts';

import { HomeHero } from './hero';
import { HomeOverview } from './overview';
import { Text, Title } from '@/common';

export const HomeMomentum = () => (
  <Section className="sec-home-principles">
    <Section.Header className="sec-home-principles-header"></Section.Header>
    <Section.Content className="sec-home-principles-content"></Section.Content>
  </Section>
);

export const HomeKeynote = () => {
  return (
    <div className="sec-home-keynote">
      <div className="sec-home-keynote-left scheme-primary">
        <div className="sec-home-keynote-left-header">
          <Title>Section 1</Title>
        </div>
        <div className="sec-home-keynote-left-content">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci, ipsum
            distinctio esse molestias, amet nemo dolor, at veniam velit porro culpa qui doloribus?
            Architecto, a cumque! A, dicta fuga!
          </Text>
        </div>
      </div>
      <div className="sec-home-keynote-right scheme-secondary">
        <div className="sec-home-keynote-right-header">
          <Title>Section 2</Title>
        </div>
        <div className="sec-home-keynote-right-content">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci, ipsum
            distinctio esse molestias, amet nemo dolor, at veniam velit porro culpa qui doloribus?
            Architecto, a cumque! A, dicta fuga!
          </Text>
        </div>
      </div>
    </div>
  );
};

export const SampleSectionSplit = () => {
  return (
    <section className="sec">
      <div className="sec-left scheme-primary">
        <div className="sec-content">
          <Title h2>Section Left</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci, ipsum
            distinctio esse molestias, amet nemo dolor, at veniam velit porro culpa qui doloribus?
            Architecto, a cumque! A, dicta fuga!
          </Text>
        </div>
      </div>
      <div className="sec-right scheme-secondary">
        <div className="sec-content">
          <Title h2>Section Right</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci, ipsum
            distinctio esse molestias, amet nemo dolor, at veniam velit porro culpa qui doloribus?
            Architecto, a cumque! A, dicta fuga!
          </Text>
        </div>
      </div>
    </section>
  );
};

// Think Freely, Open Minds, <span className="accent">Create With Courage,</span>

export const BlogPost1A = () => {
  return (
    <div>
      <header>
        <Title>Unleashing Responsive Design: A Dive into CSS Media Queries</Title>
      </header>
      <section>
        <Text>
          In today's digital age, where the consumption of online content happens across a myriad of
          devices and screen sizes, ensuring that your website looks stunning and functions
          seamlessly across all platforms is paramount. This is where the magic of CSS media queries
          comes into play. In this blog post, we'll explore the transformative power of CSS media
          queries in crafting responsive web designs.
        </Text>
        <Title>Understanding CSS Media Queries</Title>
        <Text>
          CSS media queries are a fundamental aspect of responsive web design. They allow developers
          to apply different styles to elements based on characteristics of the device or viewport,
          such as screen size, orientation, and resolution. By leveraging media queries, websites
          can adapt dynamically to provide an optimal viewing experience on various devices, from
          desktops and laptops to tablets and smartphones.
        </Text>
      </section>
      <section>
        <Title>Unleashing Responsive Design: A Dive into CSS Media Queries</Title>
        <Text>
          Media queries in CSS follow a simple syntax, typically structured as @media followed by
          one or more media features and corresponding values enclosed within curly braces. For
          instance:
        </Text>
        <pre>
          {`
          @media screen and (max-width: 768px) {
            /* Styles applied when the viewport width is 768px or less */
          }
        `}
        </pre>
        <Text>
          In the example above, the styles within the media query will only be applied when the
          viewport width is 768 pixels or smaller.
        </Text>
        <Text>
          In the example above, the styles within the media query will only be applied when the
          viewport width is 768 pixels or smaller.
        </Text>
        <Text>Media queries can target a wide range of characteristics, including:</Text>
        <ul>
          <li>Width and Height: Control styles based on the width or height of the viewport.</li>
          <li>Orientation: Adjust layouts for portrait or landscape orientations.</li>
          <li>Resolution: Target devices with high-resolution displays for enhanced graphics.</li>
          <li>
            Device Type: Apply specific styles based on whether the device is a screen, print, or
            speech.
          </li>
        </ul>
      </section>
      <section>
        <Title>Creating Responsive Layouts</Title>
        <Text>
          One of the most common applications of CSS media queries is in creating responsive
          layouts. By defining breakpoints at specific viewport widths, developers can adapt the
          layout and design of a website to accommodate different screen sizes. For example:
        </Text>
        <pre>
          {`
          @media screen and (max-width: 600px) {
            /* Adjust layout for smaller screens */
          }
          
          @media screen and (min-width: 601px) and (max-width: 1024px) {
            /* Modify layout for medium-sized screens */
          }
          
          @media screen and (min-width: 1025px) {
            /* Apply styles for larger screens */
          }
          `}
        </pre>
        <Text>
          By strategically adjusting the layout and content at different breakpoints, designers can
          ensure that the website maintains readability and usability across a wide range of
          devices.
        </Text>
      </section>
      <section>
        <Title>Enhancing User Experience</Title>
        <Text>
          CSS media queries not only enable responsive layouts but also contribute to enhancing the
          overall user experience. By tailoring styles based on device characteristics, websites can
          optimize performance and usability. For instance, larger fonts and spacing may be applied
          on mobile devices for improved readability, while complex navigation menus may be
          simplified for smaller screens.
        </Text>
      </section>
      <section>
        <Title>Conclusion</Title>
        <Text>
          In conclusion, CSS media queries are an indispensable tool in the arsenal of web
          developers for creating responsive and user-friendly websites. By harnessing the power of
          media queries, designers can craft experiences that seamlessly adapt to the diverse
          landscape of devices and screen sizes. Whether you're building a personal blog, an
          e-commerce platform, or a corporate website, mastering CSS media queries is essential for
          delivering an exceptional user experience in today's digital world.
        </Text>
      </section>
    </div>
  );
};

export const Home = () => {
  return (
    <Page>
      <HomeHero />
      <Page.Content>
        <HomeOverview />
        <BlogPost1A />
      </Page.Content>
    </Page>
  );
};
