import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
 
const options = {
  timeout: 2000,
  position: positions.BOTTOM_CENTER 
};

ReactDOM.render(
  <React.StrictMode>
     <Provider template={AlertTemplate} {...options}>
      <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

 
