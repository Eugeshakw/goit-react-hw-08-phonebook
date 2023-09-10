import React from 'react';
import { useSelector } from 'react-redux';

import {Usermenu} from '../userMenu/userMenu'
import {AuthNav} from '../authnav/authnav'
export const AppBar = () => {
  const isLogIn = useSelector(state => state.user.isLogIn);
  console.log(isLogIn)
  return (
    <header>
      <nav>
      <AuthNav/>
      {isLogIn &&  <Usermenu />}
      
      </nav>
     
     
      
    </header>
  );
};
