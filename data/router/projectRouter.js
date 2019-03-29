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

router.get('/:id', async (req, res) => {
    try {
        const project = await Project.get(req.params.id);

        if(project){
            res.status(200).json(project);
        }else{
            res.status(404).json({message: 'Project not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error getting project'
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const project = await Project.insert(req.body);
        console.log(project);
            res.status(201).json(project);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error posting project'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = await Project.remove(req.params.id);
        if(id > 0){
            res.status(200).json({message: 'Project has been deleted'})
        }else{
            res.status(404).json({message: 'Project not found'})
        }   
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: 'Error removing project',
        });
    }
});


module.exports = router;
