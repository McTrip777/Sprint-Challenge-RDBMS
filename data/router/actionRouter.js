const express = require('express');

const Action = require('../helpers/actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const action = await Action.get(req.params.query);
        res.status(200).json(action);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error getting action'
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const action = await Action.insert(req.body);
        console.log(action);
            res.status(201).json(action);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error posting action'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = await Action.remove(req.params.id);
        if(id > 0){
            res.status(200).json({message: 'Action has been deleted'})
        }else{
            res.status(404).json({message: 'Action not found'})
        }   
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: 'Error removing action',
        });
    }
});

module.exports = router;
