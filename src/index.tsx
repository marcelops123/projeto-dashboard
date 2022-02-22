import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './components/Navbar';
import { Main } from './components/Pages/Main';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Rotas } from './Routes';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
   
    


    <Rotas />
    
    
    
  </React.StrictMode>,
  document.getElementById('root')
);
