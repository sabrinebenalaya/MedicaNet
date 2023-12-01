const express = require('express');
const router = express.Router();
const patientController = require('../Controller/patientController');

// Définir les routes CRUD pour le modèle Patient

router.post('/patients', patientController.createPatient);
router.get('/patients', patientController.getAllPatients);
router.get('/patients/:id', patientController.getPatientById);
router.put('/patients/:id', patientController.updatePatient);
router.delete('/patients/:id', patientController.deletePatient);

module.exports = router;
