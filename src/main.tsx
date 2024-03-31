import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.tsx";
import "./App.css";
import CardsPage from "./pages/CardsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/user", element: <CardsPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
