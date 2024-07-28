import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Admission from './pages/admission.jsx'
import Gallary from './pages/gallery.jsx'
import Notifications from './pages/notifications.jsx'
const router = createBrowserRouter([
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/admission",
    element: <Admission/>,
  },
  {
    path: "/gallery",
    element: <Gallary/>,
  },
  {
    path: "/notifications",
    element: <Notifications/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "/",
    element: <App />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
