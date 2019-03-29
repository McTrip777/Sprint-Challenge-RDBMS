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

module.exports = router;