import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Dashboard from './components/layouts/Dashboard';
import MovieDetail from './pages/movies/MovieDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path='' element={<Dashboard />}>
          <Route path='movies'>
            <Route path=':id' element={<MovieDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
