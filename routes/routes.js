const { Router } = require('express');
const PokemonController = require('../controllers/PokemonController.js');
const TreinadorController = require('../controllers/TreinadorController.js');
const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).send("Hello World");
})

routes.get('/listaPokemons', PokemonController.getAll);
routes.post('/inserePokemons', PokemonController.insert);
routes.put('/updatePokemons', PokemonController.update);
routes.delete('/deletePokemons', PokemonController.delete);
routes.get('/findPk', PokemonController.pokemonpk);

routes.get('/listaTreinador', TreinadorController.getAll);
routes.post('/insereTreinador', TreinadorController.insert);
routes.put('/updateTreinador', TreinadorController.update);
routes.delete('/deleteTreinador', TreinadorController.delete);
routes.get('/findPk', TreinadorController.treinadorpk);

module.exports = routes;