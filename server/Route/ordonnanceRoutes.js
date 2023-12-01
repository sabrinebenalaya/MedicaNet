const express = require('express');
const router = express.Router();
const ordonnanceController = require('../Controller/ordonnanceController');

// Définir les routes CRUD pour le modèle Ordonnance
router.post('/ordonnances', ordonnanceController.createOrdonnance);
router.get('/ordonnances', ordonnanceController.getAllOrdonnances);
router.get('/ordonnances/:id', ordonnanceController.getOrdonnanceById);
router.delete('/ordonnances/:id', ordonnanceController.deleteOrdonnance);

module.exports = router;
