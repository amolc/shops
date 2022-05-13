module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("items", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Item;
};