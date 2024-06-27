import React from 'react';
import { Outlet } from 'react-router-dom';
import { StoreProvider } from '@/app/store';
import { Icon, Toast } from '@/core';

// TODO: move notifications to seperated nested provider

const Root: React.FC = () => {
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StoreProvider>
      <Outlet />
      <Toast
        mounted={isMounted}
        onClose={() => setMounted((c) => !c)}
        icon={<Icon name="check-circle" />}
        title="Cookies, Privacy and Tracking Data."
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eos eveniet, incidunt quaerat reiciendis eligendi?"
      />
    </StoreProvider>
  );
};

Root.displayName = '@v2/Root.Layout';
export { Root };
