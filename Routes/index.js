import express from "express";
import { CategoriaRoutes } from "./CategoriaRoutes.js";
import { FornecedorRoutes } from "./FornecedorRoutes.js";
import { ProdutoRoutes } from "./ProdutoRoutes.js";

const router = express.Router();


router.use("/produtos", ProdutoRoutes);
router.use("/categorias", CategoriaRoutes);
router.use("/fornecedores", FornecedorRoutes);


export default router;