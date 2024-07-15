import * as React from 'react';
import { Page } from '@/app';
import { ArticlesHero } from './ArticlesHero';
import { ArticlesIntro } from './ArticlesIntro';
import { factory } from '@/core';

type ArticlesFactory = React.FC<{}> & {
  Hero: typeof ArticlesHero;
  Intro: typeof ArticlesIntro;
};

const data = [
  {
    id: 'articles:responsive-design',
    src: '',
    title: `Understanding the Basics of Responsive Web Design`,
    summary: `Learn the fundamentals of responsive web design, including media queries, flexible grids, and fluid images, to ensure your websites look great on any device.`,
  },
  {
    id: 'articles:css-practices',
    title: `Best Practices for Writing Clean and Maintainable CSS`,
    summary: `Discover essential tips for writing clean, organized, and maintainable CSS code. Learn about methodologies like BEM, SMACSS, and the benefits of using preprocessors like SASS and LESS.`,
  },
  {
    id: 'articles:development-accessibility',
    title: `The Importance of Accessibility in Web Development`,
    summary: `Understand the significance of web accessibility, the WCAG guidelines, and how to implement accessible features to make your websites usable for everyone.`,
  },
  {
    id: 'articles:css-grid-flexbox',
    title: `Exploring the Power of CSS Grid and Flexbox`,
    summary: `Learn about CSS Grid and Flexbox layouts, their differences, and how to use them effectively to create complex, responsive web designs.`,
  },
  {
    id: 'articles:resusable-components',
    title: `Building Reusable Components in React`,
    summary: `Learn how to create and manage reusable components in React to improve code maintainability and streamline your development process.`,
  },
  {
    id: 'articles:css-animations',
    title: `Introduction to Web Animations with CSS and JavaScript`,
    summary: `Learn how to create engaging web animations using CSS and JavaScript to enhance user interactions and improve the overall user experience.`,
  },
  {
    id: 'articles:web-preformance',
    title: `Enhancing Web Performance: Tips and Techniques`,
    summary: `Improve your website's performance with practical tips and techniques, including code optimization, lazy loading, and leveraging browser caching.`,
  },
  {
    id: 'articles:accessible-forms',
    title: `Crafting Accessible Forms`,
    summary: `Understand the best practices for creating accessible forms, including proper labeling, error handling, and keyboard navigation to ensure usability for all users.`,
  },
  {
    id: 'articles:front-end-graph-ql',
    title: `Integrating GraphQL with Your Front-End`,
    summary: `Learn how to use GraphQL to fetch data in your front-end applications, and the benefits it provides over traditional REST APIs.`,
  },
  {
    id: 'articles:front-end-typescript',
    title: `The Benefits of Using TypeScript in Front-End Development`,
    summary: `Explore the advantages of using TypeScript for front-end development, including type safety, improved code quality, and better tooling.`,
  },
  {
    id: 'articles:design-system-practices',
    title: `Building a Design System: Best Practices and Tools`,
    summary: `Understand the components of a design system, how to create one, and the tools that can help maintain consistency across your projects.`,
  },
  {
    id: 'articles:optimizing-images',
    title: `Optimizing Images for the Web`,
    summary: `Learn techniques for optimizing images to improve website load times and performance without sacrificing quality, including formats, compression, and responsive images.`,
  },
  {
    id: 'articles:html-semantics',
    title: `A Deep Dive into HTML5 Semantics`,
    summary: `Explore the importance of semantic HTML5 elements, how they improve accessibility and SEO, and best practices for using them in your projects.`,
  },
  {
    id: 'articles:ux-microinteractions',
    title: `Enhancing User Experience with Microinteractions`,
    summary: `Learn how to use microinteractions to provide feedback, guide users, and make your web applications more engaging and intuitive.`,
  },
  {
    id: 'articles:implementing-dark-mode',
    title: `Implementing Dark Mode in Web Applications`,
    summary: `Learn how to implement dark mode in your web applications, including design considerations and technical implementation tips.`,
  },
];

interface ArticlesCardProps {
  id: string;
  path: string;
  title: string;
  summary: string;
}

const ArticlesCard = () => {};
const ArticlesGallery = () => {};

const Articles: ArticlesFactory = ({}) => (
  <Page>
    <Articles.Hero />
    <Articles.Intro />
  </Page>
);

Articles.Hero = ArticlesHero;
Articles.Intro = ArticlesIntro;
Articles.displayName = '@v2/Articles.Route';
export { Articles };
