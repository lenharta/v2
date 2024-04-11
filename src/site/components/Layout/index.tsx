import { Outlet } from 'react-router-dom';
import { Menu } from '@/site/components/Menu';
import { Header } from '@/site/components/Header';

export const Layout = () => {
  return (
    <div className="layout">
      <Menu />
      <Header />
      <Outlet />
    </div>
  );
};
