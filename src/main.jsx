import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import Page from "./routes/page"
import ErrorPage from "./error-page";


import { DynamicContextProvider } from "@dynamic-labs/sdk-react"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "page",
    element: <Page />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DynamicContextProvider
    settings={{
      environmentId: "4e598b41-f388-489b-a0b3-d24064b1d1ed"
    }}>
     <RouterProvider router={router} />
    </DynamicContextProvider>
  </React.StrictMode>,
)
