module.exports = app => {

    const settings = require("../controllers/setting.controllers");

    var router = require("express").Router();
    // Create a new Setting
    router.post("/", settings.create);
    // Retrieve all Settings
    router.get("/", settings.findAll);
    // Retrieve all published Settings
    router.get("/published", settings.findAllPublished);
    // Retrieve a single Setting with id
    router.get("/:id", settings.findOne);
    // Update a Setting with id
    router.put("/:id", settings.update);
    // Delete a Setting with id
    router.delete("/:id", settings.delete);

    // Delete all Settings
    router.delete("/", settings.deleteAll);

    app.use('/api/settings', router);
};