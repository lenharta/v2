import clsx from 'clsx';
import * as React from 'react';
import { Scheme } from '@/types/common';
import { InlineCSS } from '@/common';
import { useRandomClassName } from '@/hooks';

type SectionColumnBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface SectionColumnProps extends SectionColumnBaseProps {
  scheme?: Scheme;
  span: number[];
}

function calculateColSpan(span: number = 1) {
  const MAX_PERCENTAGE = 100;
  return `${MAX_PERCENTAGE / span}%`;
}

const MAX_COLUMN_PERCENTAGE = 100;

function _SectionColumn(props: SectionColumnProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { className, span, scheme, ...otherProps } = props;
  const selector = useRandomClassName();

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    maxWidth: '100%',
    flexDirection: 'column',
  };

  const breakpoints = [
    '(min-width: 40em)',
    '(min-width: 60em)',
    '(min-width: 80em)',
    '(min-width: 100em)',
  ];

  const getColIndex = (index: number = 0) => (index ? index + 1 : 0);
  const getColSpan = (index: number = 1) => `${MAX_COLUMN_PERCENTAGE / index}%`;
  const getColFlex = (index: number = 0) => [0, 1, calculateColSpan(index)].join(' ');

  return (
    <>
      <InlineCSS
        selector={selector}
        styles={{
          flex: `0 1 ${calculateColSpan(span[0])}`,
        }}
        media={breakpoints.map((breakpoint, index) => ({
          query: breakpoint,
          styles: { flex: `0 1 ${calculateColSpan(span[getColIndex(index)])}` },
        }))}
      />
      <div {...otherProps} ref={ref} className={clsx('section', className, scheme, selector)} />
    </>
  );
}

export const SectionColumn = React.forwardRef(_SectionColumn) as React.ForwardRefExoticComponent<
  SectionColumnProps & React.RefAttributes<HTMLDivElement>
>;

SectionColumn.displayName = '@v2/Section.Col';
