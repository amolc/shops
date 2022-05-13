const db = require("../models");
const Tutorial = db.settings;
const Op = db.Sequelize.Op;

// Create and Save a new Setting
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Setting
    const settings = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Setting in the database
    Setting.create(settings)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Setting."
            });
        });
};

// Retrieve all Settings from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: {
            [Op.like]: `%${title}%` } } : null;

            Setting.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving settings."
            });
        });
};

// Find a single Setting with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Setting.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Setting with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Setting with id=" + id
            });
        });
};

// Update a Setting by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Setting.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Setting was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Setting with id=${id}. Maybe Setting was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Setting with id=" + id
            });
        });
};

// Delete a Setting with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Setting.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Setting was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Setting with id=${id}. Maybe Setting was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Setting with id=" + id
            });
        });
};

// Delete all Settings from the database.
exports.deleteAll = (req, res) => {
    Setting.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Settings were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all settings."
            });
        });
};

// find all published Setting
exports.findAllPublished = (req, res) => {
    Setting.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving settings."
            });
        });
};