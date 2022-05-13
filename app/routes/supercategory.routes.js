module.exports = app => {

    const supercategory = require("../controllers/supercategory.controllers");

    var router = require("express").Router();
    // Create a new Supercategory
    router.post("/", supercategory.create);
    // Retrieve all Supercategory
    router.get("/", supercategory.findAll);
    // Retrieve all published Supercategory
    router.get("/published", supercategory.findAllPublished);
    // Retrieve a single Supercategory with id
    router.get("/:id", supercategory.findOne);
    // Update a Supercategory with id
    router.put("/:id", supercategory.update);
    // Delete a Supercategory with id
    router.delete("/:id", supercategory.delete);

    // Delete all Supercategory
    router.delete("/", supercategory.deleteAll);

    app.use('/api/supercategory', router);
};