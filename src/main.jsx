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
    errorElement: ( // ✅ এটা যোগ করুন
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Something went wrong!</h1>
        <a href="/" className="mt-4 text-blue-500 underline">Go back home</a>
      </div>
    ),
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
            errorElement: ( // ✅ এখানেও যোগ করুন
              <div className="p-10 text-center">
                <h2 className="text-xl font-bold">Product not found!</h2>
                <a href="/all-products" className="text-blue-500 underline">Back to products</a>
              </div>
            ),
            loader: async ({ params }) => {
              const res = await fetch(`https://smart-deals-server-three.vercel.app/products/${params.id}`);
              if (!res.ok) throw new Error(`Product not found: ${res.status}`);
              return res.json();
          },
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
