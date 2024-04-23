"use strict";
// index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const formacoes_1 = require("./data/formacoes");
const idiomas_1 = require("./data/idiomas");
const app = (0, express_1.default)();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
// Rota para obter todas as formações
app.get("/formacoes", (req, res) => {
    res.json(formacoes_1.formacoes);
});
// Rota para obter detalhes de uma formação específica
app.get("/formacoes/:id", (req, res) => {
    const idFormacao = req.params.id;
    const formacao = formacoes_1.formacoes.find((form) => form.id === idFormacao);
    if (!formacao) {
        return res.status(404).json({ message: "Formação não encontrada" });
    }
    res.json(formacao);
});
// Rota para obter todas os idiomas
app.get("/idiomas", (req, res) => {
    res.json(idiomas_1.idiomas);
});
// Rota para obter detalhes de um idioma específico
app.get("/idiomas/:id", (req, res) => {
    const idIdioma = req.params.id;
    const idioma = idiomas_1.idiomas.find((i) => i.id === idIdioma);
    if (!idioma) {
        return res.status(404).json({ message: "Idioma não encontrado" });
    }
    res.json(idioma);
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
