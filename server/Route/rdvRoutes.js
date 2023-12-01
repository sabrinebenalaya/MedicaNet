const express = require('express');
const router = express.Router();
const rdvController = require('../Controller/rdvController');

// Définir les routes CRUD pour le modèle RDV
router.post('/rdv', rdvController.createRDV);
router.get('/rdv', rdvController.getAllRDVs);
router.get('/rdv/:id', rdvController.getRDVById);
router.put('/rdv/:id', rdvController.updateRDV);
router.delete('/rdv/:id', rdvController.deleteRDV);

module.exports = router;
