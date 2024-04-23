import express, { Request, Response } from "express";

interface FormacoesProps{
    id: string;
  nome: string;
  descricao: string;
  duracaoEmMeses: number;
}

const app = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

const formacoes: FormacoesProps[] = [
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

// Rota para obter todas as formações
app.get('/formacoes', (req: Request, res: Response)=>{
    res.json(formacoes)
})

//Rota para obter detalhes de uma formação específica
app.get('/formacoes/:id',  (req: Request, res: Response)=>{
    const idFormacao = req.params.id
     const formacao = formacoes.find((form) => form.id === idFormacao);

     if(!formacao){
        return res.status(404).json({message: "Formação não encontrada"})
     }

     res.json(formacao)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});