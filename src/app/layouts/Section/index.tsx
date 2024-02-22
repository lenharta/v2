import clsx from 'clsx';
import * as React from 'react';
import { Page } from '../Page';
import { mergeProps } from '@/utils';
import { createToken } from '@/common/utils';
import { SectionHeader } from './Header';
import { SectionContent } from './Content';
import type { SizeExpanded } from '@/types/common';

export type SectionScheme = 'primary' | 'secondary' | 'accent';

export type SectionBaseProps = React.JSX.IntrinsicElements['section'];

export interface SectionProps extends SectionBaseProps {
  scheme?: SectionScheme;
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

export interface SectionComponent {
  (props: SectionProps): JSX.Element | null;
  Header: typeof SectionHeader;
  Content: typeof SectionContent;
  displayName: string;
}

const defaultProps: Partial<SectionProps> = {
  scheme: 'primary',
};

export const Section: SectionComponent = (props) => {
  const {
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
    gap,
    style,
    scheme,
    children,
    className,
    ...otherProps
  } = props;

  const mergedProps = mergeProps(
    { scheme, gap, py, px, pt, pb, pl, pr, my, mx, mt, mb, ml, mr },
    defaultProps
  );

  const clxss = clsx('Section', mergedProps.scheme, className);

  return (
    <section
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
      <Page.Container>{children}</Page.Container>
    </section>
  );
};

Section.displayName = '@v2/Section';
Section.Content = SectionContent;
Section.Header = SectionHeader;
