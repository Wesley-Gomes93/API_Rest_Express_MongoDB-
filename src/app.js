import express from "express";
import conctaNaDataBase from "./config/dbConnect.js";
import apostaModels from "./models/Apostas.js"

const conexao = await conctaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
});

conexao.once("open", () =>{
    console.log("Conexão com o banco feita com sucesso!!")
});

const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.status(200).send("Entradas do Lucas Tylty");
});

app.get("/tips", async (req, res) =>{
    const listaApostas = await apostaModels.find({});
    res.status(200).json(listaApostas);
});

app.get("/tips/:id", (req, res) =>{
    const index = buscarTips(req.params.id);
    res.status(200).json(apostas[index]);
});

app.post("/tips", (req, res) => {
    apostas.push(req.body);
    res.status(201).send("Entrada criada com sucesso");
});

app.put("/tips/:id", (req, res) => {
    const index = buscarTips(req.params.id);
    apostas[index].Valor_Entrada = req.body.Valor_Entrada;
    res.status(200).json(apostas);
});

app.delete("/tips/:id", (req, res) => {
    const index = buscarTips(req.params.id);
    apostas.splice(index, 1);
    res.status(200).send("Aposta apagada com sucesso!!");
});





export default app;