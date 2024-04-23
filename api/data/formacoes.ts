// formacoes.ts

export interface FormacaoProps {
  id: string;
  nome: string;
  descricao: string;
  duracaoEmMeses: number;
}

export const formacoes: FormacaoProps[] = [
  {
    id: "formacaobasica",
    nome: "Formação Básica",
    descricao:
      "Duração de 4 meses, para aqueles que querem sair do zero e aprender o básico do idioma.",
    duracaoEmMeses: 4,
  },
  {
    id: "formacaointermediaria",
    nome: "Formação Intermediária",
    descricao:
      "Duração de 12 meses, para aqueles que pretendem aprender o suficiente para se comunicar de forma clara em outro idioma.",
    duracaoEmMeses: 12,
  },
  {
    id: "formacaocompleta",
    nome: "Formação Completa",
    descricao:
      "Duração de 20 meses, para aqueles que buscam dominar o idioma do A ao Z.",
    duracaoEmMeses: 20,
  },
];
