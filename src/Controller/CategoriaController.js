import { prisma } from "../prisma.js";

class CategoriaController {
    async getAll(req, res) {
        try {
            const categoria = await prisma.categoria.findMany();
            res.json(categoria);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao buscar os categorias"});
        }
    }

    async create(req, res) {
        try {
            const categoria = await prisma.categoria.create({
                data: req.body
            });
            res.json(categoria);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao criar o categoria"});
        }
    }

    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const categoria = await prisma.categoria.update({
                where: {
                    id: id
                },
                data: req.body
            });
            res.json(categoria);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao atualizar o categoria"});
        }
    }

    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            const categoria = await prisma.categoria.delete({
                where: {
                    id: id
                }
            });
            res.json(categoria);
        } catch (error) {
            res.status(500).json({error: error.message +  "erro ao deletar o categoria"});
        }
    }
}


export { CategoriaController };
