export type PageHeaderRootProps = {};

export type PageHeaderNavProps = {};

export type PageHeaderLogoBoxProps = {};

export type PageHeaderActionBoxProps = {};

export type PageHeaderBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & PageHeaderRootProps;
  Nav: React.JSX.IntrinsicElements['div'] & PageHeaderNavProps;
  LogoBox: Omit<React.JSX.IntrinsicElements['div'], 'children'> & PageHeaderLogoBoxProps;
  ActionBox: Omit<React.JSX.IntrinsicElements['div'], 'children'> & PageHeaderActionBoxProps;
};

export type PageHeaderProps = {
  Root: PageHeaderBaseProps['Root'];
  Nav: PageHeaderBaseProps['Nav'] & React.RefAttributes<HTMLDivElement>;
  LogoBox: PageHeaderBaseProps['LogoBox'] & React.RefAttributes<HTMLDivElement>;
  ActionBox: PageHeaderBaseProps['ActionBox'] & React.RefAttributes<HTMLDivElement>;
};

export type PageHeaderComponents = {
  Root: React.FC<PageHeaderProps['Root']>;
  Nav: React.ForwardRefExoticComponent<PageHeaderProps['Nav']>;
  LogoBox: React.ForwardRefExoticComponent<PageHeaderProps['LogoBox']>;
  ActionBox: React.ForwardRefExoticComponent<PageHeaderProps['ActionBox']>;
};

export type PageHeaderComponent = PageHeaderComponents['Root'] & {
  Nav: PageHeaderComponents['Nav'];
  LogoBox: PageHeaderComponents['LogoBox'];
  ActionBox: PageHeaderComponents['ActionBox'];
};
