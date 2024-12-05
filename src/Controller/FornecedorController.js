import { prisma } from "../prisma.js";

class FornecedorController {
    async getAll(req, res) {
        try {
            const fornecedor = await prisma.fornecedor.findMany();
            res.json(fornecedor);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao buscar os categorias"});
        }
    }

    async create(req, res) {
        try {
            const fornecedor = await prisma.fornecedor.create({
                data: req.body
            });
            res.json(fornecedor);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao criar o fornecedor"});
        }
    }

    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const fornecedor = await prisma.fornecedor.update({
                where: {
                    id: id
                },
                data: req.body
            });
            res.json(fornecedor);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao atualizar o fornecedor"});
        }
    }

    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            const fornecedor = await prisma.fornecedor.delete({
                where: {
                    id: id
                }
            });
            res.json(fornecedor);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao deletar o fornecedor"});
        }
    }
}


export { FornecedorController };
