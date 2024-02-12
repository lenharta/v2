import * as React from 'react';
import { Align, Size } from '../common';

export type TextRootProps = {
  component?: 'p';
  align?: Align;
  size?: Size;
};

export type TextBaseProps = {
  Root: React.JSX.IntrinsicElements['p'] & TextRootProps;
};

export type TextRefProps = {
  Root: TextBaseProps['Root'] & React.RefAttributes<HTMLParagraphElement>;
};

export type TextComponents = {
  Root: React.ForwardRefExoticComponent<TextRefProps['Root']>;
};

export type TextRootComponent = TextComponents['Root'];
