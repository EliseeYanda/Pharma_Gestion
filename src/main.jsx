import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/layout/layout';
import Login from './pages/login';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/home';
import SingleProduct from './pages/single-product';
import About from './pages/about';
import Products from './pages/products';
import ProductsList from './pages/products-list';
import AllProduct from './pages/all-product';
import CreateProduct from './pages/create-product';
import UpdateProduct from './pages/update-product';
import DeleteProduct from './pages/delete-product';
import DashboardLayout from './components/dashboard-layout/dashboard-layout';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "",
            element: <ProductsList />,
          },
          {
            path: ":id",
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/all-product",
        element: <AllProduct />,
      },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/update-product",
        element: <UpdateProduct />,
        
      },
      {
        path: "/delete-product",
        element: <DeleteProduct />,
        
      },
    ],
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
