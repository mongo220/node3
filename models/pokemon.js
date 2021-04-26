module.exports = (sequelize, Sequelize) => {
    const Pokemon = sequelize.define("Pokemons", {
        id: { primaryKey: true, type: Sequelize.INTEGER },
        numero: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        tipo: Sequelize.STRING,
        geracao: Sequelize.INTEGER
    });

    return Pokemon;
}