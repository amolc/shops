module.exports = (sequelize, Sequelize) => {
    const Organization = sequelize.define("organization", {
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
    return Organization;
};