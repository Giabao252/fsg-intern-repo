import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import { RouterProvider } from 'react-router-dom'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId={clientId}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </GoogleOAuthProvider>
)
