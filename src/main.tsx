import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { RouterProvider } from "react-router-dom";import Router from './routes/routes.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     {/* <RouterProvider router={Router} /> */}
    <App />
  </React.StrictMode>,
)
