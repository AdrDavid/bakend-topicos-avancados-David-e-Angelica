import express from "express";
import { CategoriaController } from "../src/Controller/CategoriaController.js";


const CategoriaRoutes = express.Router();

const categoriaController = new CategoriaController();


CategoriaRoutes.get("/", categoriaController.getAll);
CategoriaRoutes.post("/create", categoriaController.create);
CategoriaRoutes.put("/edit/:id", categoriaController.update);
CategoriaRoutes.delete("/delete/:id", categoriaController.delete);

export { CategoriaRoutes };
