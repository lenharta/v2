import { ElementProps } from '@/types';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Navbar } from '../Navbar';

export interface LayoutProps extends ElementProps<'div'> {}

export const Layout = (props: LayoutProps) => {
  const { children, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className="layout"
      data-prefers-color-scheme="dark"
      data-prefers-color-accent="orange"
    >
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};
