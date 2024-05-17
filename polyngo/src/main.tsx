import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Providers } from "./providers.tsx";
import Header from "./Components/Common/Header/Header.tsx";
import HomePage from "./routes/HomePage.tsx";
import Idiomas from "./routes/Principais/Idiomas.tsx";
import Formacoes from "./routes/Principais/Formacoes.tsx";
import ErrorPage from "./routes/error-Page.tsx";
import IdFormacao from "./routes/Principais/IDFormacao.tsx";
import './index.css'
import Perfil from "./routes/Basicas/Perfil.tsx";
import Metodologia from "./routes/Basicas/Metodologia.tsx";
import Matricula from "./routes/Basicas/Matricula.tsx";
import Contato from "./routes/Basicas/Contato.tsx";
import SaibaMais from "./routes/Basicas/SaibaMais.tsx";
import Suporte from "./routes/Basicas/Suporte.tsx";
import Institucional from "./routes/Basicas/Institucional.tsx";
import Bolsas from "./routes/Basicas/Bolsas.tsx";
import Inclusao from "./routes/Basicas/Inclusao.tsx";
import AreaAluno from "./routes/Basicas/AreaAluno.tsx";
import Login from "./routes/Principais/Login.tsx";
import Registro from "./routes/Principais/Registro.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Providers>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/idiomas" element={<Idiomas />} />
          <Route path="/formacoes" element={<Formacoes />} />
          <Route path="/formacoes/:id" element={<IdFormacao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/areadoaluno" element={<AreaAluno />} />
          

          <Route path="/perfil" element={<Perfil />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/matricula" element={<Matricula />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/saibamais" element={<SaibaMais />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/bolsas" element={<Bolsas />} />
          <Route path="/inclusao" element={<Inclusao />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Providers>
    </Router>
  </React.StrictMode>
);
