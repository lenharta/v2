import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { createToken } from '@/common/utils';
import type { SizeExpanded } from '@/types/common';

export type SectionContentBaseProps = React.JSX.IntrinsicElements['div'];

export interface SectionContentProps extends SectionContentBaseProps {
  gap?: SizeExpanded;
  py?: SizeExpanded;
  px?: SizeExpanded;
  pt?: SizeExpanded;
  pb?: SizeExpanded;
  pl?: SizeExpanded;
  pr?: SizeExpanded;
  my?: SizeExpanded;
  mx?: SizeExpanded;
  mt?: SizeExpanded;
  mb?: SizeExpanded;
  ml?: SizeExpanded;
  mr?: SizeExpanded;
}

export interface SectionContentComponent {
  (props: SectionContentProps): JSX.Element | null;
  displayName: string;
}

const defaultProps: Partial<SectionContentProps> = {};

export const SectionContent: SectionContentComponent = (props) => {
  const {
    gap,
    py,
    px,
    pt,
    pb,
    pl,
    pr,
    my,
    mx,
    mt,
    mb,
    ml,
    mr,
    style,
    children,
    className,
    ...otherProps
  } = props;

  const mergedProps = mergeProps(
    { gap, py, px, pt, pb, pl, pr, my, mx, mt, mb, ml, mr, style },
    defaultProps
  );

  const clxss = clsx('Section-content', className);

  return (
    <div
      {...otherProps}
      className={clxss}
      style={{
        gap: createToken('section-gap', mergedProps.gap),
        marginTop: createToken('section-padding', mergedProps.mt),
        marginBottom: createToken('section-padding', mergedProps.mb),
        marginLeft: createToken('section-padding', mergedProps.ml),
        marginRight: createToken('section-padding', mergedProps.mr),
        marginBlock: createToken('section-padding', mergedProps.my),
        marginInline: createToken('section-padding', mergedProps.mx),
        paddingTop: createToken('section-padding', mergedProps.pt),
        paddingBottom: createToken('section-padding', mergedProps.pb),
        paddingLeft: createToken('section-padding', mergedProps.pl),
        paddingRight: createToken('section-padding', mergedProps.pr),
        paddingBlock: createToken('section-padding', mergedProps.py),
        paddingInline: createToken('section-padding', mergedProps.px),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

SectionContent.displayName = '@v2/SectionContent';
