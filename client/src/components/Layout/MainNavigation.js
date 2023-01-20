import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classNamees from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context';


const MainNavigation = () => {

  const authCtx = useContext(AuthContext);
  const loggin = authCtx.isLoggedin;
  
  return (
    <header>
    <div className='p-3 text-center bg-white border-bottom'>
      <div className='container'>
        <div className='row mt-2'>
          <div className='col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0'>
            <a href="#!" className='ms-md-2 mb-2'>
              <img src="images/logo.png" height="60" />
            </a>
          </div>

          <div className='col-md-4'>
          <form className='d-flex input-group w-auto my-automb-3 mb-md-0'>
            <input type="search" className='form-control rounded' placeholder="Search in store"/>
            <span className='input-group-text border-0 d-none d-lg-flex'><i className='fas fa-search'></i></span>
          </form>
          </div>

    
        <div class="d-flex flex-row col-md-4 justify-content-center align-items-center mt-1">
          <div className='d-flex p-3'>
            <a className='text-reset me-3' href="#">
              <span><i className='fas fa-shopping-cart'></i></span>
              <span className='badge rounded-pill badge-notification bg-danger'>4</span>
            </a>
            <Link to='/'>My cart</Link>
          </div>
          <div className='d-flex p-3'>
            <a className='text-reset me-3' href="#">
              <span><i className='fas fa-user'></i></span>
            </a>
            <Link to='/auth'>Login</Link>
          </div>      
        </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container justify-content-center justify-content-md-between">
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a className="nav-link" href="#">Nutrion</a>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a className="nav-link" href="#">Clothing & Accessories </a>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a className="nav-link" href="#">Foods & Snacks </a>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a className="nav-link" href="#">Vitamins</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  </div>
  
</header>

  // <header className={classNamees.header}>
    //   <Link to='/'>
    //     <div className={classNamees.logo}>React Auth</div>
    //   </Link>
    //   <nav>
    //     <ul>
    //       { !loggin && (
    //       <li>
    //         <Link to='/auth'>Login</Link>
    //       </li>
    //       )}
    //       { loggin && (
    //       <li>
    //         <Link to='/profile'>Profile</Link>
    //       </li>
    //       )}
    //       { loggin && (
    //       <li>
    //         <button>Logout</button>
    //       </li>
    //       )}
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default MainNavigation;
