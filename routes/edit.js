const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/remove/:id', editController.deleteTicket) //read
router.get('/:id', editController.updateTicket) 

module.exports = router;