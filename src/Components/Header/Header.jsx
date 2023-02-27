import { Link } from 'react-router-dom';
// import Home from '../../Pages/Home/Home';


import classes from './Header.module.css'

function Header() {
    return (
        <header>
          <nav>
            <Link to="/" className={classes.logo}>#VANLIFE</Link>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </ul>
          </nav>
        </header>
    );
  }

  export default Header