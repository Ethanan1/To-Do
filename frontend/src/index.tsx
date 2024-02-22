import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />)
