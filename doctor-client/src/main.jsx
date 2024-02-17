import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './assets/Routers/Route'
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Route}> </RouterProvider>
      <Toaster>
      </Toaster>
    </ThemeProvider>
  </React.StrictMode>,
)
