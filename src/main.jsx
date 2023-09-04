import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Login from './Login.jsx'
import { Loader } from './components/Loader.jsx'
import CardsContainer from './components/CardsContainer.jsx'
import Information from './Information.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App>{<CardsContainer endpoint={'anime'} />}</App>
  },
  {
    path: '/about',
    element: <h1>About</h1>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/anime/:id',
    element: <App>{<Information endpoint={'anime'} />}</App>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loader />} />
  </React.StrictMode>
)