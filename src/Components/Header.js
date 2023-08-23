import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './Store/authSlice';
import "../App.css"
import logo from '../assest/6866238.png'

const Header = () => {
  const dispatch = useDispatch();
  let isRejected = useSelector((state)=> state.books.isRejected);
// if have reject show alert not have rejected null not show alert


  
// to toogle logging btn
let islogin = useSelector((state)=> state.state.stateAuth)

  return (
    <>
    { isRejected &&
      <div class="alert alert-danger mb-0 rounded-0" role="alert">
        {isRejected}
      </div>
    }
      <nav className='navbar navbar-dark bg-dark'>
        <img src={logo} alt='' className='ms-4'></img>

        <button className='btn btn-outline-primary me-4' type='submit' onClick={()=> dispatch(login())}>
       { islogin? 'Log In' : 'Log Out'}
        </button>
      </nav>
    </>
  );
};

export default Header;