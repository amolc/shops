const db = require("../models");
const Supercategory = db.supercategory;
const Op = db.Sequelize.Op;

// Create and Save a new Supercategory
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Supercategory
    const supercategory = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Supercategory in the database
    Supercategory.create(supercategory)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Supercategory."
            });
        });
};

// Retrieve all Supercategory from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Supercategory.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving supercategory."
            });
        });
};

// Find a single Supercategory with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Supercategory.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Supercategory with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Supercategory with id=" + id
            });
        });
};

// Update a Supercategory by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Supercategory.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Supercategory was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Supercategory with id=${id}. Maybe Supercategory was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Supercategory with id=" + id
            });
        });
};

// Delete a Supercategory with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Supercategory.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Supercategory was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Supercategory with id=${id}. Maybe Supercategory was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Supercategory with id=" + id
            });
        });
};

// Delete all Supercategory from the database.
exports.deleteAll = (req, res) => {
    Supercategory.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Supercategory were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all supercategory."
            });
        });
};

// find all published Supercategory
exports.findAllPublished = (req, res) => {
    Supercategory.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving supercategory."
            });
        });
};