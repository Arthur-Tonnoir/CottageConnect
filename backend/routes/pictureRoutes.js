const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/pictureController');

router.get('/', pictureController.findAll);
router.get('/:id', pictureController.findById);
router.post('/', pictureController.create);
router.put('/:id', pictureController.update);
router.delete('/:id', pictureController.delete);

module.exports = router;