const express = require('express');
const router = express.Router();
const cottageController = require('../controllers/cottageController');

router.get('/', cottageController.findAll);
router.get('/:id', cottageController.findById);
router.post('/', cottageController.create);
router.put('/:id', cottageController.update);
router.delete('/:id', cottageController.delete);

module.exports = router;