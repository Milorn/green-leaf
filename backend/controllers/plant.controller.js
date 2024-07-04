const Plant = require('../models/Plant');
const Joi = require('joi');

exports.index = async (req, res) => {
    const plants = await Plant.find();
    return res.json(plants);
};

exports.store = async (req, res) => {
    const plant = await Plant.create({
        name: req.body.name,
        type: req.body.type,
        age: req.body.age,
        price: req.body.price,
        description: req.body.description,
        image: req.file.path
    });
    return res.json(plant);
};

exports.show = async (req, res) => {
    const plant = await Plant.findById(req.params.id);
    return plant ? res.json(plant) : res.status(404).json({ message: "Not found" });
};

exports.update = async (req, res) => {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return plant ? res.json(plant) : res.status(404).json({ message: "Not found" });
};

exports.delete = async (req, res) => {
    const plant = await Plant.findByIdAndDelete(plant);
    return plant ? res.json({ message: "Deleted successfully" }) : res.status(404).json({ message: "Not found" });
};