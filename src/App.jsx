import React from 'react';
// import {Form} from './components/AllForm/AllForm'
import { Layout } from 'components/layout/Layout';
import {LoginPage, Dashboard} from 'pages';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchContacts} from './components/redux/createSlice'
import { Route, Routes } from 'react-router-dom';
export const App = () =>  {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  })



    return (
      <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          {/* <Route path='/' element={<Form/>}/> */}
        </Route>
        
        
      </Routes>
      
      </>
    );
  
}

