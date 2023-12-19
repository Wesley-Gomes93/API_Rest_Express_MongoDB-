import express from "express";
import apostas from "./apostasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Entradas do Lucas Tylty"))

    app.use(express.json(), apostas);
};


export default routes;