import express from "express";
import { FornecedorController } from "../src/Controller/FornecedorController.js";


const FornecedorRoutes = express.Router();

const fornecedorController = new FornecedorController();


FornecedorRoutes.get("/", fornecedorController.getAll);
FornecedorRoutes.post("/create", fornecedorController.create);
FornecedorRoutes.put("/edit/:id", fornecedorController.update);
FornecedorRoutes.delete("/delete/:id", fornecedorController.delete);

export { FornecedorRoutes };
