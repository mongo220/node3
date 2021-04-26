const { Pokemons } = require('../models/');
const pokemon = require('../models/pokemon');

class PokemonController {
    async getAll(req, res) {
        try {
            const pokemons = await Pokemons.findAll();
            return res.status(200).json(pokemons);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }

    async insert(req, res) {
        try {
            const pokemons = Pokemons.create(req.body);
            return res.status(200).json(pokemons);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }

    async update(req, res) {
        try {
            const pokemons = Pokemons.update({
                nome: req.body.nome,
                tipo: req.body.tipo,
                geracao: req.body.geracao,
                numero: req.body.numero
            },
                {
                    where: { id: req.query.id }
                });
            return res.status(200).json(pokemons);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }

    async delete(req, res) {
        try {
            const pokemons = Pokemons.destroy(
                {
                    where: { id: req.query.id }
                }
            );
            return res.status(200).json(pokemons);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }

    async pokemonpk(req, res) {
        try {
            const pokemons = await Pokemons.findByPk(req.query.id);
            return res.status(200).json(pokemons);
        } catch (ex) {
            return res.status(400).json({ error: ex.message })
        }
    }
}

module.exports = new PokemonController();