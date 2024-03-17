import clsx from 'clsx';
import * as React from 'react';
import { InlineCSS } from '@/common';
import { useRandomClassName } from '@/hooks';
import { SectionColumn } from './Column';
import { Scheme } from '@/types/common';

export type SectionBaseProps = React.ComponentPropsWithoutRef<'section'>;
export type SectionComponents = { Column: typeof SectionColumn };
export type SectionComponentProps = SectionProps & React.RefAttributes<HTMLDivElement>;
export type SectionComponent = React.ForwardRefExoticComponent<SectionComponentProps>;

export interface SectionProps extends SectionBaseProps {
  scheme?: Scheme;
}

function _Section(props: SectionProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, scheme = 'primary', ...otherProps } = props;
  const selector = useRandomClassName();
  return (
    <>
      <InlineCSS
        selector={selector}
        styles={{
          gridColumn: '1 / 25',
          flexWrap: 'wrap',
          display: 'flex',
          width: '100%',
        }}
      />
      <section {...otherProps} ref={ref} className={clsx('section', className, scheme, selector)} />
    </>
  );
}

export const Section = React.forwardRef(_Section) as SectionComponent & SectionComponents;
Section.displayName = '@v2/Section';
Section.Column = SectionColumn;
