import express from "express";
import { ProdutoController } from "../src/Controller/ProdutoController.js";


const ProdutoRoutes = express.Router();

const produtoController = new ProdutoController();


ProdutoRoutes.get("/", produtoController.getAll);
ProdutoRoutes.post("/create", produtoController.create);
ProdutoRoutes.put("/edit/:id", produtoController.update);
ProdutoRoutes.delete("/delete/:id", produtoController.delete);

export { ProdutoRoutes };
