import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { formacoes } from "./data/formacoes.js";
import { idiomas } from "./data/idiomas.js";
import mongoose from "mongoose";
import cors from "cors";
import UserModel from "./models/userModel.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING

const app = express();
app.use(express.json());
// Configuração do CORS
const allowedOrigins = [
  "https://polyngo-xi.vercel.app",
  "https://polyngo-xi.vercel.app/idiomas",
  "https://polyngo-xi.vercel.app/formacoes",
  "https://polyngo-xi.vercel.app/login",
  "https://polyngo-xi.vercel.app/register",
  "https://polyngo-xi.vercel.app/signup",
  "https://polyngo-xi.vercel.app/users",
];
app.use(cors({ origin: true, credentials: true }));

mongoose.connect(
  CONNECTION_STRING
);
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send(
    "<h1>Bem-vindo à API Polyngo</h1><p>Esta é uma API para fornecer informações sobre idiomas e formações. Aqui estão alguns dos endpoints disponíveis:</p><ul><li>/idiomas - Obtém informações sobre idiomas</li><li>/idiomas/:id - Obtém informações de um idioma específico</li><li>/formacoes - Obtém informações sobre formações</li><li>/formacoes/:id - Obtém informações sobre uma formação específica</li></ul>"
  );
});

// REGISTER & LOGIN

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await UserModel.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await UserModel.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "notexist", message: "Usuário não está cadastrado." });
    }

    const isPasswordCorrect = user.password === password;
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ error: "incorrect", message: "Senha incorreta." });
    }

    res.json("exist");
  } catch (e) {
    res.status(500).json({ error: "fail", message: "Erro no servidor." });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "fail", message: "Erro no servidor." });
  }
});

app.get("/users/:email", async (req, res) => {
  const userEmail = req.params.email;

  try {
    const user = await UserModel.findOne({ email: userEmail });
    if (!user) {
      return res
        .status(404)
        .json({ error: "notexist", message: "Usuário não está cadastrado." });
    }

    res.json(user);
  } catch (e) {
    res.status(500).json({ error: "fail", message: "Erro no servidor." });
  }
});

app.delete("/users/:email", async (req, res) => {
  const userEmail = req.params.email;

  try {
    const user = await UserModel.findOneAndDelete({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "fail", message: "Erro no servidor" });
  }
});

app.get("/register", (req, res) => {
  res.send("Pagina de registro");
});

// Rota para obter todas as formações
app.get("/formacoes", (req, res) => {
  res.json(formacoes);
});

// Rota para obter detalhes de uma formação específica
app.get("/formacoes/:id", (req, res) => {
  const idFormacao = req.params.id;
  const formacao = formacoes.find((form) => form.id === idFormacao);

  if (!formacao) {
    return res.status(404).json({ message: "Formação não encontrada" });
  }

  res.json(formacao);
});

// Rota para obter todas os idiomas
app.get("/idiomas", (req, res) => {
  res.json(idiomas);
});

// Rota para obter detalhes de um idioma específico
app.get("/idiomas/:id", (req, res) => {
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
