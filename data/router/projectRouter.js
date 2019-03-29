const express = require('express');

const Project = require('../helpers/projectModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const project = await Project.get(req.params.query);
        res.status(200).json(project);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error getting project'
        });
    }
});

module.exports = router;
