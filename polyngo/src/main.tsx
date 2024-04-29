import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage.tsx";

import Idiomas from "./routes/Principais/Idiomas.tsx";
import IDIdioma from "./routes/Principais/IDIdioma.tsx";
import Formacoes from "./routes/Principais/Formacoes.tsx";
import ErrorPage from "./routes/error-Page.tsx";
import IdFormacao from "./routes/Principais/IDFormacao.tsx";
import { Providers } from "./providers.tsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/idiomas",
    element: <Idiomas />,
  },
  {
    path: "/idiomas:id",
    element: <IDIdioma />,
  },
  {
    path: "/formacoes",
    element: <Formacoes />,
  },
  {
    path: "/formacoes:id",
    element: <IdFormacao />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
