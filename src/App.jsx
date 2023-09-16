import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MovieDetail from './pages/movies/MovieDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Movies from './pages/movies/Movies';
import Error from './pages/error/Error';
import DashBoardLayout from './components/layouts/DashBoardLayout';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<DashBoardLayout />}>
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:id' element={<MovieDetail />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
