import React from 'react'
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Fruits from './components/Fruits/Fruits';
import Dairy from './components/Dairy/Dairy';
import Seafood from './components/Seafood/Seafood';
import Allproducts from './components/Allproducts/Allproducts'
import Layout from './components/Layout/Layout';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/> ,
      children: [

    {
      path: '/',
      element: <Home/> ,
    },

    {
      path: '/Fruits',
      element: <Fruits/> ,
    },

    {
      path: '/Dairy',
      element: <Dairy/> ,
    },

      {
      path: '/Seafood',
      element: <Seafood/> ,
    },

      {
      path: '/Allproducts',
      element: <Allproducts/> ,
    },
      ]
    },

     

  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
