const mongoose = require('mongoose');

const ordonnanceSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  medicaments: [{
    medicament: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medicament'
    }
    // Autres attributs que vous pourriez avoir pour chaque médicament dans l'ordonnance...
  }],
  datePrescription: {
    type: Date,
    required: true,
    default: Date.now
  },
  // Autres attributs que vous pourriez avoir pour l'ordonnance...
});

const Ordonnance = mongoose.model('Ordonnance', ordonnanceSchema);

module.exports = Ordonnance;
