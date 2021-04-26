module.exports = (sequelize, Sequelize) => {
    const Treinadores = sequelize.define("Treinadores", {
        id: { primaryKey: true, type: Sequelize.INTEGER },
        idade: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        tipo: Sequelize.STRING,
        level: Sequelize.INTEGER,
        poke_preferido: Sequelize.STRING,
        geracao: Sequelize.INTEGER
    });

    return Treinadores;
}