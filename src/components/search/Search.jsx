import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { OPTIONS, API_URL } from '../../utils/data';
import { useDebounce } from 'use-debounce';
import { toast } from 'react-toastify';
import DisplaySearch from './DisplaySearch';

const Search = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState(null);
  const [query] = useDebounce(text, 200);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (text) setIsLoading(true);
    if (query) {
      setResults(null);
      searchMovies();
    }
  }, [query, text]);

  const searchMovies = async () => {
    const url = `${API_URL}search/movie?query=${query}`;
    try {
      const res = await fetch(url, {
        headers: OPTIONS,
      });

      const data = await res.json();
      setResults(data.results);
    } catch (err) {
      toast.error('an error occured fetching movies');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='col-span-2 w-full ml-2 md:ml-0 relative hidden md:block'>
      <form className=''>
        <label
          htmlFor='search'
          title='search'
          aria-description='search'
          className='w- full flex justify-between items-center rounded-md p-1 md:p-2 border'
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

      {text && (
        <div className='absolute top-full left-0 right-0 w-full md:w-1/2 h-96 bg-white flex flex-col items-center overflow-y-hidden text-black'>
          <DisplaySearch results={results} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
};
export default Search;
