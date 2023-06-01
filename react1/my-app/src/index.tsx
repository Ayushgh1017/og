import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartApp from './StopWatch';
import StopwatchApp from './StopWatch';
import Cart from './Cart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StopwatchApp/> */}
    <Cart/>
  </React.StrictMode>
);
