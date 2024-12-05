import { prisma } from "../prisma.js";

class ProdutoController {
    async getAll(req, res) {
        try {
            const produtos = await prisma.produto.findMany({
                include: {
                    fornecedor: true,
                    categoria: true
                }
            });
            res.json(produtos);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao buscar os produtos"});
        }
    }

    async create(req, res) {
        try {
            const produto = await prisma.produto.create({
                data: req.body
            });
            res.json(produto);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao criar o produto"});
        }
    }

    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const produto = await prisma.produto.update({
                where: {
                    id: id
                },
                
                data: req.body
            });
            res.json(produto);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao atualizar o produto"});
        }
    }

    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            const produto = await prisma.produto.delete({
                where: {
                    id: id
                }
            });
            res.json(produto);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao deletar o produto"});
        }
    }
}


export { ProdutoController };
