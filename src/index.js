
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./dist/bootstrap/css/bootstrap.min.css";
import "./dist/css/style.css";
import "./dist/css/font-awesome/css/font-awesome.min.css";
import "./dist/css/et-line-font/et-line-font.css";
import "./dist/css/themify-icons/themify-icons.css";
import "./dist/css/simple-lineicon/simple-line-icons.css";
import "./dist/css/skins/_all-skins.min.css";
import "./dist/plugin/dataTables.bootstrap.min.css";
import RouterWrapper from './RouterWrapper';



ReactDOM.render(
  <React.StrictMode>
    <RouterWrapper /> {/* Render the RouterWrapper component */}
  </React.StrictMode>,
  document.getElementById('root')
);





