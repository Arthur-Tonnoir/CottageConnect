const express = require('express');
const router = express.Router();
const citieController = require('../controllers/citieController');

router.get('/', citieController.findAll);
router.get('/:id', citieController.findById);
router.post('/', citieController.create);
router.put('/:id', citieController.update);
router.delete('/:id', citieController.delete);

module.exports = router;