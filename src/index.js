import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { Provider } from 'react-redux'
// import  {store} from './components/redux/store'
import { store, persistor } from './components/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {GlobalStyle} from './components/globalStyle/globalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/goit-react-hw-08-phonebook'>
          <GlobalStyle/>
            <App /> 
        </BrowserRouter>
      </PersistGate> 
    </Provider>
  </React.StrictMode>
);
