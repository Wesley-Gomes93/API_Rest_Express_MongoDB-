import express from "express";
import conctaNaDataBase from "./config/dbConnect.js";
import routes from "./config/routes/index.js";

const conexao = await conctaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
});

conexao.once("open", () =>{
    console.log("Conexão com o banco feita com sucesso!!")
});

const app = express();
routes (app);

app.delete("/tips/:id", (req, res) => {
    const index = buscarTips(req.params.id);
    apostas.splice(index, 1);
    res.status(200).send("Aposta apagada com sucesso!!");
});

export default app;