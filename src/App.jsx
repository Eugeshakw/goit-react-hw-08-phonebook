import React from 'react';

import { Layout } from 'components/layout/Layout';
import { LoginPage, Dashboard } from 'pages';
import { RegisterForm } from './components/registerForm';
import { refreshCurrentUser } from './components/redux/auth/auth-operations';
import { PrivateRoute } from './components/privateRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PublicRoute } from './components/publickRoute';
// import {fetchContacts} from './components/redux/createSlice'
import { Route, Routes } from 'react-router-dom';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('диспатч');
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/" component={<RegisterForm />} />
            }
          />

          <Route
            path="login"
            element={<PublicRoute redirectTo="/dashboard" component={<LoginPage />} />}
          />
          

          <Route
            path="dashboard"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Dashboard />}
              ></PrivateRoute>
            }
          />

        </Route>
      </Routes>
    </>
  );
};
