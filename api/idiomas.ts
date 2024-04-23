import express, { Request, Response } from "express";

interface idiomasProps {
  id: string;
  nome: string;
  descricao: string;
  urlBandeira: string
  alt: string
}

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

const idiomas: idiomasProps[] = [
  {
    id: "ingles",
    nome: "Inglês",
    urlBandeira: "https://static.significados.com.br/flags/gb.svg",
    alt: "Bandeira Grã Bretanha",
    descricao:
      "Aprenda inglês de forma autêntica e prática, com instrutores experientes e materiais de qualidade. Desenvolva suas habilidades comunicativas conversando com falantes nativos e participando de atividades interativas.",
  },
  {
    id: "espanhol",
    nome: "Espanhol",
    urlBandeira: "https://static.significados.com.br/flags/es.svg",
    alt: "Bandeira Espanha",
    descricao:
      "Explore a riqueza cultural do espanhol enquanto aprimora suas habilidades linguísticas. Nossos cursos oferecem a oportunidade de praticar conversação com falantes nativos, mergulhando na autenticidade da língua e da cultura hispânica.",
  },
  {
    id: "frances",
    nome: "Francês",
    urlBandeira: "https://static.significados.com.br/flags/fr.svg",
    alt: "Bandeira França",
    descricao:
      "Aprenda francês de forma envolvente e dinâmica, com uma abordagem prática e imersiva. Nossos instrutores dedicados e o ambiente de aprendizado colaborativo proporcionam uma experiência única para aprimorar suas habilidades linguísticas.",
  },
  {
    id: "alemao",
    nome: "Alemão",
    urlBandeira: "https://static.significados.com.br/flags/de.svg",
    alt: "Bandeira Alemanha",
    descricao:
      "Desenvolva suas habilidades em alemão de maneira eficaz e autêntica. Nossos cursos oferecem uma combinação de instrução teórica e prática, permitindo que você se comunique com confiança em situações do dia a dia e explore a riqueza cultural da língua alemã.",
  },
];


// Rota para obter todas as formações
app.get("/idiomas", (req: Request, res: Response) => {
  res.json(idiomas);
});

//Rota para obter detalhes de uma formação específica
app.get("/idiomas/:id", (req: Request, res: Response) => {
  const idFormacao = req.params.id;
  const idioma = idiomas.find((i) => i.id === idFormacao);

  if (!idioma) {
    return res.status(404).json({ message: "Formação não encontrada" });
  }

  res.json(idioma);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
