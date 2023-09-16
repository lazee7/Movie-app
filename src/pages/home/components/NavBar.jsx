import Logo from '../../../components/Logo';
import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import Search from '../../../components/search/Search';

const NavBar = () => {
  return (
    <nav className='flex  md:grid gap-4 place-content-center grid-cols-4 md:gap-10 mx-1 mt-2 md:m-0 rounded-2xl py-2 px-2 justify-between w-full md:py-7 md:pl-8 md:pr-28'>
      <Logo />
      <Search />
      <Link href={''} className='flex justify-end items-center gap-2 w-full'>
        <span className='text-base'>sign in</span>
        <HiMenuAlt4 className={'bg-pink rounded-full p-1 text-2xl'} />
      </Link>
    </nav>
  );
};

export default NavBar;
