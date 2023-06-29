const express = require('express');
const router = express.Router();
const cottageController = require('../controllers/cottageController');

router.get('/', cottageController.findAll);
router.get('/:id', cottageController.findById);
router.post('/', cottageController.create);
router.put('/:id', cottageController.update);
router.delete('/:id', cottageController.delete);
router.get('/tri/cottages/:limit', cottageController.res_Count);// fonction recupérer cottages par Nombre de reservations
router.get('/rand/cottages', cottageController.res_Rand);// fonction recupérer cottages aléatoirement
module.exports = router;