// CSS
import './App.css';

// Router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages
import Home from './components/Home';
import PostList from './components/Part1/PostList';
import PostForm from './components/Part2/PostForm';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/" className='links'>Home</Link>
            </li>
            <li>
              <Link to="/list" className='links'>PostList</Link>
            </li>
            <li>
              <Link to="/form" className='links'>PostForm</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/' element={ <Home/> }></Route>
          <Route exact path='/list' element={ <PostList/> }></Route>
          <Route exact path='/form' element={ <PostForm/> }></Route>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
