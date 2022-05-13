module.exports = (sequelize, Sequelize) => {
    const Setting = sequelize.define("settings", {
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
    return Setting;
};