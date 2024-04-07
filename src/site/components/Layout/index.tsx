import { Outlet } from 'react-router-dom';
import { Header } from '@/site/components/Header';

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};
