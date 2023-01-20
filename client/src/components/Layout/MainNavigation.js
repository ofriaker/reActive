import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';

const MainNavigation = () => {

  const authCtx = useContext(AuthContext);
  const loggin = authCtx.isLoggedin;
  
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          { !loggin && (
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          )}
          { loggin && (
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          )}
          { loggin && (
          <li>
            <button>Logout</button>
          </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
