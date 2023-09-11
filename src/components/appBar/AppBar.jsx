import React from 'react';
import { useSelector } from 'react-redux';

import {Usermenu} from '../userMenu/userMenu'
import {AuthNav} from '../authnav/authnav'
import style from './styleAppbar.module.scss'

export const AppBar = () => {
  const isLogIn = useSelector(state => state.user.isLogIn);
  console.log(isLogIn)
  return (
    <header >
      <nav className={style.nav}>
      <AuthNav/>
      {isLogIn &&  <Usermenu />}
      
      </nav>
     
     
      
    </header>
  );
};
