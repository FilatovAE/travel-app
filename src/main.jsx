import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import HomePage from './pages/HomePage/HomePage'
import LogInPage from './pages/LogInPage/LogInPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/travel-app/',
    element: <App />,
    children: [
      {
        path: '/travel-app/',
        element: <HomePage />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'login',
        element: <LogInPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
