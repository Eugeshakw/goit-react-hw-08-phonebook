import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Usermenu} from '../userMenu/userMenu'
export const AppBar = () => {
  const isLogIn = useSelector(state => state.user.isLogIn);
  console.log(isLogIn)
  return (
    <header>
      <nav>
        <ul>
          <li>
            {!isLogIn && <Link to="/login">log In</Link>}
            
            
          </li>
          <li>
            {isLogIn && <Link to="/dashboard">dashboard</Link>}
            
          </li>
        </ul>
      </nav>
      {isLogIn && <Usermenu />}
     
      
    </header>
  );
};
