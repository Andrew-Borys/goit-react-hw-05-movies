import HeaderBar from '../HeaderBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <HeaderBar />
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
