const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Récupérer tous les projets
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Ajouter un nouveau projet
router.post('/', async (req, res) => {
    const project = new Project({
        name: req.body.name,
        description: req.body.description,
        tools: req.body.tools,
        status: req.body.status,
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
