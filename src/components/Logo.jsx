import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <Link to={'/'} className='center md:gap-3 gap-1 w-fit'>
      <img src={'/tv.png'} alt='logo' className='bg-secondary rounded-full' />
      <span className={`font-bold text-sm md:text-xl `}>MovieBox</span>
    </Link>
  );
};

export default Logo;
