module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
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
    return Order;
};