import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import SignUpPage from './component/loginpage/signuppage/SignUpPage.jsx'
import LoginPage from './component/loginpage/LoginPage.jsx'
import ForgotPasswordPage from './component/loginpage/forgotpassword/ForgotPasswordPage.jsx'
import HomePage from './component/homepage/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "signuppage",
    element: <SignUpPage/>
  },
  {
    path: "loginpage",
    element: <LoginPage/>
  },
  {
    path: "forgotpasswordpage",
    element: <ForgotPasswordPage/>
  },
  {
    path: "homepage",
    element: <HomePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
