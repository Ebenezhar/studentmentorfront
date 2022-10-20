import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Assets/sb-admin-2.min.css'
import { Provider } from 'react-redux';
import { UserProvider } from './usercontext';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </UserProvider>
  </BrowserRouter>


);

reportWebVitals();
