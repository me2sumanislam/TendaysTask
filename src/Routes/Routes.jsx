import React from 'react'
import Root from '../Pages/Root/Root';
 
 import { createBrowserRouter } from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

  
 
export const router = createBrowserRouter([
  {
  path: "/",
  Component: Root,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,               
      Component: Home,
      loader: () => fetch('../../public/booksData.json'),
    }
  ]
}
 ]);
 

