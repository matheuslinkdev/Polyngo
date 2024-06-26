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
export interface LinkItemProps {
  ref: string;
  href: string;
}

export interface UserProps {
  id: string
  email: string;
  password: string;
}

export interface AuthContextProps {
  logout: () => void;
  deleteAccount: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserProps | null;
  setUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
BASE_URL: string
}

export interface RedirectBtnProps {
  label: string;
  path: string;
}