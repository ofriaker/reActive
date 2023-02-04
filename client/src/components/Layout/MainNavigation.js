import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useState } from 'react';
import React from 'react';
import Catagory from '../Catagory/Catagory';
import {
  Route,
  Link,
} from "react-router-dom";
import { Routes } from "react-router";





const MainNavigation = () => {

  const authCtx = useContext(AuthContext);
  const loggin = authCtx.isLoggedin;

  
    return (
    <header>
    <div className='p-3 text-center bg-white border-bottom'>
      <div className='container'>
        <div className='row mt-2'>
          <div className='col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0'>
            <Link to='/' className='ms-md-2 mb-2'>
              <img src="images/logo.jpg" height="60" />
            </Link>
          </div>

          <div className='col-md-4 mt-3'>
          <form className='d-flex input-group w-auto my-automb-3 mb-md-0'>
            <input type="search" className='form-control rounded' placeholder="Search in store"/>
            <span className='input-group-text border-0 d-none d-lg-flex'><i className='fas fa-search'></i></span>
          </form>
          </div>

    
        <div className="d-flex flex-row col-md-4 justify-content-center align-items-center mt-1 " >
          <div className='d-flex p-3'>
            <a className='text-reset me-3' href="/cart">
              <span><i className='fas fa-shopping-cart'></i></span>
              <span className='badge rounded-pill badge-notification bg-danger'>4</span>
            </a>
            <Link to='/cart' style={{color: '#333333'}}>My cart</Link>
          </div>
          { !loggin && (
          <div className='d-flex p-3'>
            <a className='text-reset me-3' href="/auth">
              <span><i className='fas fa-user'></i></span>
            </a>
            <Link to='/auth' style={{color: '#333333'}}>Login</Link>
          </div>)} 
          { loggin && (
            <div className='d-flex p-3'>
            <a className='text-reset me-3' href="#">
              <span><i className='fas fa-user'></i></span>
            </a>
            <Link to='/profile' style={{color: '#333333'}}>Account</Link>
          </div>   
          )}   
           
        </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-center justify-content-md-between">
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-lg-0 d-none d-md-inline-block">
              <Link to='/catagory/Whey Protein' className="nav-link">Whey protein</Link>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <Link to='/catagory/Milk Protein' className="nav-link">Milk protein</Link>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <Link to='/catagory/Vegan Protein' className="nav-link">Vegan protein</Link>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <Link to='/catagory/Protein Bars' className="nav-link">Protein Bars</Link>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <Link to='/catagory/Nut Butter' className="nav-link">Nut Butter</Link>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <Link to='/catagory/Drinks' className="nav-link">Drinks</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  </div>
</header>
  );
};

export default MainNavigation;
