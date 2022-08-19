import { Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Desc from './components/Desc';
import Error from './components/Error';
import Home from './components/Home';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <div className='ddd'>
        <Link to='/Movies'><Button>Movies</Button></Link>
        <Link to='/'><Button>Home</Button></Link>
        
      </div>
   <Routes> 
   <Route path='/' element={<Home/>}  >    </Route>
   <Route path='/Movies' element={<MovieCard/>}  >    </Route>
   <Route path='/Movies/description/:title' element={<Desc/>}  >    </Route>
   <Route path='*' element={<Error/>}  >    </Route>

   </Routes>
    </div>
  );
}

export default App;
