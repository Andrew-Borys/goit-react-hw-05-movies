import { HeaderBar } from 'components/HeaderBar/HeaderBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};
