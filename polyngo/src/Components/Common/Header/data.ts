import { useAuth } from "../../../Context/AuthContext";

export const getLinks = () => {
  const { isAuthenticated } = useAuth();

  const links = [
    {
      ref: "Home",
      href: "/",
    },
    {
      ref: "Idiomas",
      href: "/idiomas",
    },
    isAuthenticated && {
      ref: "Área do Aluno",
      href: "/areadoaluno",
    },
    {
      ref: "Formações",
      href: "/formacoes",
    },
    {
      ref: "Metodologia",
      href: "/metodologia",
    },
    {
      ref: "Matrícula",
      href: "/matricula",
    },
    {
      ref: "Contato",
      href: "/contato",
    },
    {
      ref: "Saiba Mais",
      href: "/saibamais",
    },
    {
      ref: "Suporte",
      href: "/suporte",
    },
    {
      ref: "Institucional",
      href: "/institucional",
    },
    {
      ref: "Bolsas",
      href: "/bolsas",
    },
    {
      ref: "Inclusão",
      href: "/inclusao",
    },
  ];

  return links.filter(Boolean);
};
