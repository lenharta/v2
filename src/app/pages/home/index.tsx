import { Page } from '@/app/layouts';
import { HomeHero } from './hero';

import clsx from 'clsx';
import * as React from 'react';
import { useRandomClassName } from '@/hooks';
import { InlineCSS, Text, Title } from '@/common';

export type SectionScheme = 'primary' | 'secondary' | 'accent';

type SectionColumnElementProps = React.ComponentPropsWithoutRef<'div'>;
type SectionColumnRefProps = React.RefAttributes<HTMLDivElement>;
type SectionColumnBaseProps = SectionColumnElementProps & SectionColumnRefProps;

export interface SectionColumnProps extends SectionColumnBaseProps {
  scheme?: SectionScheme;
}

function _SectionColumn(props: SectionColumnProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, scheme = 'primary', ...otherProps } = props;
  const selector = useRandomClassName();
  return (
    <>
      <InlineCSS selector={selector} styles={{ display: 'flex', flexDirection: 'column' }} />
      <div {...otherProps} ref={ref} className={clsx('section', className, scheme, selector)} />
    </>
  );
}

export type SectionColumnComponent = React.ForwardRefExoticComponent<SectionColumnProps>;
export const SectionColumn = React.forwardRef(_SectionColumn) as SectionColumnComponent;
SectionColumn.displayName = '@v2/Section.Column';

type SectionElementProps = React.ComponentPropsWithoutRef<'section'>;
type SectionRefProps = React.RefAttributes<HTMLDivElement>;
type SectionBaseProps = SectionElementProps & SectionRefProps;

export interface SectionProps extends SectionBaseProps {
  scheme?: SectionScheme;
}

function _Section(props: SectionProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, scheme = 'primary', ...otherProps } = props;
  const selector = useRandomClassName();
  return (
    <>
      <InlineCSS
        selector={selector}
        styles={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gridColumn: '1 / 25',
        }}
      />
      <section {...otherProps} ref={ref} className={clsx('section', className, scheme, selector)} />
    </>
  );
}

export type SectionComponent = React.ForwardRefExoticComponent<SectionProps> & {
  Column: typeof SectionColumn;
};

export const Section = React.forwardRef(_Section) as SectionComponent;
Section.displayName = '@v2/Section';
Section.Column = SectionColumn;

export const Home = () => {
  return (
    <Page>
      <Page.Menu />
      <Page.Hero children={<HomeHero />} />
      <Page.Content>
        <Section>
          <Section.Column>
            <Title h2>Section Title</Title>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque minima eos rerum qui
              itaque soluta consequuntur quae cumque odio quibusdam. Delectus repudiandae aliquam
              quos laborum enim at pariatur molestiae minima?
            </Text>
          </Section.Column>
        </Section>
        <Section>
          <Section.Column>
            <Title h2>Section Title</Title>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque minima eos rerum qui
              itaque soluta consequuntur quae cumque odio quibusdam. Delectus repudiandae aliquam
              quos laborum enim at pariatur molestiae minima?
            </Text>
          </Section.Column>
          <Section.Column>
            <Title h2>Section Title</Title>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque minima eos rerum qui
              itaque soluta consequuntur quae cumque odio quibusdam. Delectus repudiandae aliquam
              quos laborum enim at pariatur molestiae minima?
            </Text>
          </Section.Column>
        </Section>
      </Page.Content>
    </Page>
  );
};

// Think Freely, Open Minds, <span className="accent">Create With Courage,</span>
// I develop accessible digital experiences for the modern world.
