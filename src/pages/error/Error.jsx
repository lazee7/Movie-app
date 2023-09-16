import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-blurred'>
      <h2 className='text-9xl text-pink '>404</h2>
      <p className='py-5'>page not found</p>
      <Button
        className={'px-9 py-3 bg-pink text-white rounded-xl capitalize'}
        onClick={() => navigate(-1)}
      >
        go back
      </Button>
    </div>
  );
};

export default Error;
