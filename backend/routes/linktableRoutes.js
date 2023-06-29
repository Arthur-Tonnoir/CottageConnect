const express = require('express');
const router = express.Router();
const linktableController = require('../controllers/linktableController');

router.get('/', linktableController.findAll);
router.get('/:id', linktableController.findById);
router.post('/', linktableController.create);
router.put('/:id', linktableController.update);
router.delete('/:id', linktableController.delete);

module.exports = router;