 import React from 'react'
import Root from '../Pages/Root/Root';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, // Ekhane Navbar ebong Footer ache
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,              
        Component: Home,
        loader: () => fetch('../../public/booksData.json'),
      },
      {
        path: 'about', // Ekhon About-ti Root-er bhetor chole esheche
        Component: About,
      },
      {
        path:'/bookDetails/:id',
        Component:BookDetails
      }
    ]
  },
  // Ekhon ekhane alada kore '/about' likhar dorkar nei
]);