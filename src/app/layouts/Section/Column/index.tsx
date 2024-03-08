import clsx from 'clsx';
import * as React from 'react';
import { InlineCSS } from '@/common';
import { useRandomClassName } from '@/hooks';
import { Scheme } from '@/types/common';

type SectionColumnElementProps = React.ComponentPropsWithoutRef<'div'>;
type SectionColumnRefProps = React.RefAttributes<HTMLDivElement>;
type SectionColumnBaseProps = SectionColumnElementProps & SectionColumnRefProps;

export interface SectionColumnProps extends SectionColumnBaseProps {
  scheme?: Scheme;
  span: number[];
}

function calculateColSpan(span: number = 1) {
  const MAX_PERCENTAGE = 100;
  return `${MAX_PERCENTAGE / span}%`;
}

function _SectionColumn(props: SectionColumnProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, span, scheme, ...otherProps } = props;
  const selector = useRandomClassName();
  return (
    <>
      <InlineCSS
        selector={selector}
        styles={{
          maxWidth: '100%',
          flex: `0 1 ${calculateColSpan(span[0])}`,
          display: 'flex',
          flexDirection: 'column',
        }}
        media={[
          {
            query: '(min-width: 40em)',
            styles: { flex: `0 1 ${calculateColSpan(span[1] || span[0])}` },
          },
          {
            query: '(min-width: 60em)',
            styles: { flex: `0 1 ${calculateColSpan(span[2] || span[0])}` },
          },
          {
            query: '(min-width: 80em)',
            styles: { flex: `0 1 ${calculateColSpan(span[3] || span[0])}` },
          },
          {
            query: '(min-width: 100em)',
            styles: { flex: `0 1 ${calculateColSpan(span[4] || span[0])}` },
          },
        ]}
      />
      <div {...otherProps} ref={ref} className={clsx('section', className, scheme, selector)} />
    </>
  );
}

export type SectionColumnComponent = React.ForwardRefExoticComponent<SectionColumnProps>;
export const SectionColumn = React.forwardRef(_SectionColumn) as SectionColumnComponent;
SectionColumn.displayName = '@v2/Section.Column';
