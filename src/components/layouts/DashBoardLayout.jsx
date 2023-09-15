import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';

const DashBoardLayout = () => {
  return (
    <div className='overflow-hidden md:flex lg:h-screen'>
      <SideBar />
      <section className='overflow-y-scroll hide-scrollbar w-full px-5 md:px-10 py-5'>
        <Outlet />
      </section>
    </div>
  );
};

export default DashBoardLayout;
