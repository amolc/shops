module.exports = app => {

    const organization = require("../controllers/organization.controllers");

    var router = require("express").Router();
    // Create a new Organization
    router.post("/", organization.create);
    // Retrieve all Organization
    router.get("/", organization.findAll);
    // Retrieve all published Organization
    router.get("/published", organization.findAllPublished);
    // Retrieve a single Organization with id
    router.get("/:id", organization.findOne);
    // Update a Organization with id
    router.put("/:id", organization.update);
    // Delete a Organization with id
    router.delete("/:id", organization.delete);

    // Delete all Organization
    router.delete("/", organization.deleteAll);

    app.use('/api/organization', router);
};