const express = require('express');
const router = express.Router();
const cottageController = require('../controllers/cottageController');

router.get('/', cottageController.findAll);
router.get('/cottage/:id', cottageController.findById);
router.get('/cottage/:nombre_personne/:date_start/:date_end/', cottageController.findByMombrePersonneAndDateStartAndDateEnd);
router.post('/cottage/', cottageController.create);
router.put('/cottage/:id', cottageController.update);
router.delete('/cottage/:id', cottageController.delete);
router.get('/tri/cottages/:limit', cottageController.res_Count);// fonction recupérer cottages par Nombre de reservations
router.get('/rand/cottages', cottageController.res_Rand);// fonction recupérer cottages aléatoirement
router.post('/withPhotos', cottageController.createWithPhotos)
module.exports = router;