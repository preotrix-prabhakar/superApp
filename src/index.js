import App from "./App";
import css from '../src/index.css'
import ReactDOM from 'react-dom/client'
import { AppProvider } from "./context/AppContext";
// import React from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App/>
  </AppProvider>
);


