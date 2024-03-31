import { Outlet } from 'react-router-dom';
import { ElementProps } from '@/types';
import { Navbar } from '../Navbar';
import { Header } from '../Header';

export interface LayoutProps extends ElementProps<'div'> {}

export const Layout = (props: LayoutProps) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} className="layout">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};
