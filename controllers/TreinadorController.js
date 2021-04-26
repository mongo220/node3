const { Treinadores } = require('../models/').Treinadores;

class TreinadorController {
    async getAll(req, res) {
        try {
            const treinadores = await Treinadores.findAll();
            return res.status(200).json(treinadores);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }

    async insert(req, res) {
        try {
            const treinadores = Treinador.create(req.body);
            return res.status(200).json(treinadores);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }

    async update(req, res) {
        try {
            const treinadores = Treinador.update({
                nome: req.body.nome,
                tipo: req.body.tipo,
                geracao: req.body.geracao,
                numero: req.body.numero
            },
                {
                    where: { id: req.query.id }
                });
            return res.status(200).json(treinadores);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }

    async delete(req, res) {
        try {
            const treinadores = Treinador.destroy(
                {
                    where: { id: req.query.id }
                }
            );
            return res.status(200).json(treinadores);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }

    async treinadorpk(req, res) {
        try {
            const treinadores = await Treinador.findByPk(req.query.id);
            return res.status(200).json(treinadores);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }
}

module.exports = new TreinadorController();