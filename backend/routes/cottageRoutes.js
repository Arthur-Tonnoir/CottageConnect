const express = require('express');
const router = express.Router();
const cottageController = require('../controllers/cottageController');

router.get('/', cottageController.findAll);
router.get('/cottage/:id', cottageController.findById);
router.get('/cottage/:max_personne/:date_creation/:ville', cottageController.findByMaxPersonneAndDateCreationAndVille)
router.post('/cottage/', cottageController.create);
router.put('/cottage/:id', cottageController.update);
router.delete('/cottage/:id', cottageController.delete);

module.exports = router;