module.exports = {
    HOST: "mysql.superadmin.shop",
    USER: "restapi",
    PASSWORD: "10gXWOqeaf!",
    DB: "shops",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};