import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup.tsx';
import Home from './pages/Home.tsx';
import ProductDetailsPage from './pages/ProductDetailsPage.tsx';
import InventoryListing from './pages/InventoryListing.tsx';
import ShoppingCart from './pages/ShoppingCart.tsx';
import UserProfile from './pages/UserProfile.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/signUp',
    element: <Signup />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/productDetail/:productId',
    element: <ProductDetailsPage />
  },
  {
    path: '/inventoryList',
    element: <InventoryListing />
  },
  {
    path: '/shoppingCart',
    element: <ShoppingCart />
  },
  {
    path: '/userProfile',
    element: <UserProfile />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Login />
//   </React.StrictMode>,
// )
