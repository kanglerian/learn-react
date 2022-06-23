import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/users' element={ <Users/> } />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const About = () => {
  return <h2>About</h2>
}

const Users = () => {
  return <h2>Users</h2>
}

export default App;
