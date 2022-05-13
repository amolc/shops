module.exports = (sequelize, Sequelize) => {
    const Supercategory = sequelize.define("supercategory", {
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
    return Supercategory;
};