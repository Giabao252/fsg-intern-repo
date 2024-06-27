import React from 'react'
import ReactDOM from 'react-dom/client'
//import { router } from './App.tsx'
import { Home } from './mains/export'
import './index.css'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
)

/* <RouterProvider router={router} /> */
