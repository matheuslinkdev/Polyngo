// index.ts

import express, { Request, Response } from "express";
import { formacoes } from "./data/formacoes";
import { idiomas } from "./data/idiomas";


const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

// Rota para obter todas as formações
app.get("/formacoes", (req: Request, res: Response) => {
  res.json(formacoes);
});

// Rota para obter detalhes de uma formação específica
app.get("/formacoes/:id", (req: Request, res: Response) => {
  const idFormacao = req.params.id;
  const formacao = formacoes.find((form) => form.id === idFormacao);

  if (!formacao) {
    return res.status(404).json({ message: "Formação não encontrada" });
  }

  res.json(formacao);
});

// Rota para obter todas os idiomas
app.get("/idiomas", (req: Request, res: Response) => {
  res.json(idiomas);
});

// Rota para obter detalhes de um idioma específico
app.get("/idiomas/:id", (req: Request, res: Response) => {
  const idIdioma = req.params.id;
  const idioma = idiomas.find((i) => i.id === idIdioma);

  if (!idioma) {
    return res.status(404).json({ message: "Idioma não encontrado" });
  }

  res.json(idioma);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
