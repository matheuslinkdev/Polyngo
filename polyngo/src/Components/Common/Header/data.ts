// data.ts
import { LinkItemProps } from "../../../../types/global-types";
import { UseAuth } from "../../../Context/AuthContext";

export const getLinks = (): LinkItemProps[] => {
  const { isAuthenticated } = UseAuth();

  const links: (LinkItemProps | false)[] = [
    { ref: "Home", href: "/" },
    { ref: "Idiomas", href: "/idiomas" },
    isAuthenticated && { ref: "Área do Aluno", href: "/areadoaluno" },
    { ref: "Formações", href: "/formacoes" },
    { ref: "Metodologia", href: "/metodologia" },
    { ref: "Matrícula", href: "/matricula" },
    { ref: "Contato", href: "/contato" },
    { ref: "Saiba Mais", href: "/saibamais" },
    { ref: "Suporte", href: "/suporte" },
    { ref: "Institucional", href: "/institucional" },
    { ref: "Bolsas", href: "/bolsas" },
    { ref: "Inclusão", href: "/inclusao" },
  ];

  // Filter out false values
  return links.filter((link): link is LinkItemProps => Boolean(link));
};
