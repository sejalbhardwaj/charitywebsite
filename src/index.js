import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aboutpage from './pages/aboutpage';
import Work from './pages/workpage';
import Contactpage from './pages/contactpage';
import Donatepage from './pages/donatepage';
import Mediapage from './pages/mediapage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, 
  },
  {
    path: "about",
    element: <Aboutpage/>, 
  },
  
  {
    path: "contact",
    element: <Contactpage/>, 
  },
  {
    path: "donate",
    element: <Donatepage/>, 
  },
  {
    path: "media",
    element: <Mediapage/>, 
  },
  {
    path: "work",
    element: <Work/>, 
  }



]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


