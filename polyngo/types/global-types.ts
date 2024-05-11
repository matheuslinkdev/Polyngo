import React from "react";
export interface fetchProps {
  endpoint: string;
  id?: string;
}

export interface FormacaoProps {
  id: string;
  nome: string;
  descricao: string;
}
export interface IdiomaProps {
  urlBandeira: string;
  alt: string;
  nome: string;
  descricao: string;
}
export interface ScreenBgProps {
  children: React.ReactNode;
  bgImageUrl: string;
}
