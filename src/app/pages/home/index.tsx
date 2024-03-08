import { Page } from '@/app/layouts';
import { HomeHero } from './hero';
import { camelToKebabCase, generateRandomId, objectKeys } from '@/utils';
import { useStore } from '@/store';
import clsx from 'clsx';
import React from 'react';
import { Text, Title } from '@/common';

export interface InlineStylesMediaQuery {
  query: string;
  styles: React.CSSProperties;
}

export interface InlineStylesInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: InlineStylesMediaQuery[];
}

export function cssObjectToString(css: React.CSSProperties) {
  return objectKeys(css)
    .reduce(
      (acc, rule) =>
        css[rule] !== undefined ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
      ''
    )
    .trim();
}

export function stylesToString({ selector, styles, media }: InlineStylesInput) {
  const baseStyles = styles ? cssObjectToString(styles) : '';
  const mediaQueryStyles = !Array.isArray(media)
    ? []
    : media.map((item) => `@media${item.query}{.${selector}{${cssObjectToString(item.styles)}}}`);

  return `${baseStyles ? `.${selector}{${baseStyles}}` : ''}${mediaQueryStyles.join('')}`.trim();
}

export function useStyleNonce() {
  return useStore().nonce;
}

const InlineCSS = (props: InlineStylesInput) => {
  const { selector, styles, media } = props;
  const nonce = useStyleNonce();
  return (
    <style
      dangerouslySetInnerHTML={{ __html: stylesToString({ selector, styles, media }) }}
      nonce={nonce?.()}
    />
  );
};

export function useRandomClassName() {
  const id = React.useId().replace(/:/g, '');
  return id;
}

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
