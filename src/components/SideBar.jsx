import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { BiCameraMovie } from 'react-icons/bi';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { LuCalendarDays } from 'react-icons/lu';
import { useState } from 'react';
import Logo from './Logo';
import Button from './Button';
import PropTypes from 'prop-types';
import { HiMenuAlt4 } from 'react-icons/hi';
import { MdLogout } from 'react-icons/md';

const Links = () => {
  const navlinks = [
    { id: 0, url: '', name: 'home', Icon: <GoHome /> },
    { id: 1, url: '/movies', name: 'movies', Icon: <BiCameraMovie /> },
    { id: 2, url: '', name: 'tV series', Icon: <PiTelevisionSimpleBold /> },
    { id: 3, url: '', name: 'upcoming', Icon: <LuCalendarDays /> },
  ];
  return (
    <nav>
      {navlinks.map(({ url, id, name, Icon }) => {
        return (
          <NavLink
            to={url}
            key={id}
            className={`link text-sm lg:text-link ${({ isActive }) =>
              isActive ? 'active' : ''}`}
          >
            {Icon}
            {name}
          </NavLink>
        );
      })}
    </nav>
  );
};

const OverLay = ({ close }) => {
  return (
    <div
      role='button'
      onClick={close}
      className='fixed top-0 left-0 right-0 bottom-0 w-full h-full cursor-pointer bg-opacity-50 bg-black z-10'
    ></div>
  );
};

OverLay.propTypes = {
  close: PropTypes.func,
};

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };
  return (
    <>
      <div
        className={`md:flex flex-col justify-between items-center border border-light-black rounded-e-sb w-56 py-9 ${
          showSideBar ? 'flex fixed z-30 bg-white h-screen' : 'hidden'
        }`}
      >
        <Logo />
        <Links />
        <div className='border mx-5 rounded-[1.25rem] bg-grey border-light pt-9 px-5 pb-5 flex flex-col gap-5'>
          <p className='text-small font-semibold'>
            play movie quizes and earn free tickets
          </p>
          <p className='text-link text-xs'>50k people are playing now</p>
          <Button className=' rounded-3xl bg-faint text-xs px-5 py-2 w-fit self-center'>
            start playing
          </Button>
        </div>

        <Button className='link'>
          <MdLogout />
          log out
        </Button>
      </div>
      {showSideBar && <OverLay close={toggleSideBar} />}
      <div className='md:hidden flex   justify-between items-center p-8'>
        <Logo />
        <Button onClick={toggleSideBar} className='text-4xl'>
          <HiMenuAlt4 className={'bg-pink rounded-full p-1 '} />
        </Button>
      </div>
    </>
  );
};

export default SideBar;
