// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Providers } from "./providers.tsx";
import Header from "./Components/Common/Header/Header.tsx";
import HomePage from "./routes/HomePage.tsx";
import Idiomas from "./routes/Principais/Idiomas.tsx";
import IDIdioma from "./routes/Principais/IDIdioma.tsx";
import Formacoes from "./routes/Principais/Formacoes.tsx";
import ErrorPage from "./routes/error-Page.tsx";
import IdFormacao from "./routes/Principais/IDFormacao.tsx";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <Router>
    <Providers>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/idiomas" element={<Idiomas />} />
          <Route path="/idiomas/:id" element={<IDIdioma />} />
          <Route path="/formacoes" element={<Formacoes />} />
          <Route path="/formacoes/:id" element={<IdFormacao />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Providers>
      </Router>
  </React.StrictMode>
);
