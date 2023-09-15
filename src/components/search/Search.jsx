import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

const Search = () => {
  const [text, setText] = useState('');
  return (
    <>
      <form className='col-span-2 w-full ml-2 md:ml-0 relative'>
        <label
          htmlFor='search'
          title='search'
          aria-description='search'
          className='w-full flex justify-between items-center rounded-md p-1 md:p-2 border'
        >
          <input
            type='search'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='What do you want to watch?'
            className='w-full border-none outline-none bg-inherit'
          />
          <BiSearch className={''} />
        </label>
      </form>
    </>
  );
};
export default Search;
