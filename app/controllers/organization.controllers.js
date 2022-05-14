const db = require("../models");
const Organization = db.organizations;
const Op = db.Sequelize.Op;

// Create and Save a new Organization
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Organization
    const organizations = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Organization in the database
    Organization.create(organizations)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Organization."
            });
        });
};

// Retrieve all Organizations from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Organization.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving organizations."
            });
        });
};

// Find a single Organization with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Organization.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Organization with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Organization with id=" + id
            });
        });
};

// Update a Organization by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Organization.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Organization was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Organization with id=${id}. Maybe Organization was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Organization with id=" + id
            });
        });
};

// Delete a Organization with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Organization.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Organization was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Organization with id=${id}. Maybe Organization was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Organization with id=" + id
            });
        });
};

// Delete all Organizations from the database.
exports.deleteAll = (req, res) => {
    Organization.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Organizations were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all organizations."
            });
        });
};

// find all published Organization
exports.findAllPublished = (req, res) => {
    Organization.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving organizations."
            });
        });
};