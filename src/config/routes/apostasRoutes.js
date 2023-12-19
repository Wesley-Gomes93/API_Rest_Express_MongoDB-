import express from "express";
import ApostaController from "../controller/apostaController.js";
const routes = express.Router();

routes.get("/tips", ApostaController.listarApostas);
routes.get("/tips/:id", ApostaController.listarApostaPorId);
routes.post("/tips", ApostaController.cadastrarAposta);
routes.put("/tips/:id", ApostaController.atualizarAposta);
routes.delete("/tips/:id", ApostaController.excluirAposta);

export default routes;




