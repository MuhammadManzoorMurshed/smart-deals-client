import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/root-layout/RootLayout.jsx'
import Home from './pages/home/Home.jsx'
import AllProducts from './pages/all-products/AllProducts.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import Register from './pages/register/Register.jsx'
import MyProducts from './pages/my-products/MyProducts.jsx'
import MyBids from './pages/my-bids/MyBids.jsx'

import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import CreateProduct from './pages/create-product/CreateProduct.jsx'
import ProductDetails from './pages/product-details/ProductDetails.jsx'
import Login from './pages/login/Login.jsx'
import Loader from './components/loader/Loader.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'all-products',
        Component: AllProducts,

        children: [
          {
            path: 'product-details/:id',
            loader: ({ params }) => fetch(`https://smart-deals-server-three.vercel.app/products/${params.id}`),
            Component: ProductDetails
          }
        ]
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'my-products',
        element: <MyProducts />
      },
      {
        path: 'my-bids',
        element: <MyBids />
      },
      {
        path: 'create-product',
        element: <CreateProduct />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
