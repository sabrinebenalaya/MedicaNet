const mongoose = require('mongoose');

const rdvSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  },
  heure: {
    type: Date,
    required: true
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  // Autres attributs que vous pourriez avoir...
});

const RDV = mongoose.model('RDV', rdvSchema);

module.exports = RDV;
