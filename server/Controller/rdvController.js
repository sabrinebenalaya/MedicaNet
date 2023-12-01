const RDV = require('../Model/RDV');

// Contrôleur pour créer un RDV
exports.createRDV = async (req, res) => {
  try {
    const rdv = new RDV(req.body);
    await rdv.save();
    res.status(201).json(rdv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contrôleur pour récupérer tous les RDVs
exports.getAllRDVs = async (req, res) => {
  try {
    const rdvs = await RDV.find();
    res.status(200).json(rdvs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contrôleur pour récupérer un RDV par son ID
exports.getRDVById = async (req, res) => {
  try {
    const rdv = await RDV.findById(req.params.id);
    if (!rdv) {
      return res.status(404).json({ message: 'RDV not found' });
    }
    res.status(200).json(rdv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contrôleur pour mettre à jour un RDV par son ID
exports.updateRDV = async (req, res) => {
  console.log("req", req.body)
  try {
    const rdv = await RDV.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rdv) {
      return res.status(404).json({ message: 'RDV not found' });
    }
    res.status(200).json(rdv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contrôleur pour supprimer un RDV par son ID
exports.deleteRDV = async (req, res) => {
  try {
    const rdv = await RDV.findByIdAndDelete(req.params.id);
    if (!rdv) {
      return res.status(404).json({ message: 'RDV not found' });
    }

      const rdvs = await RDV.find();
    res.status(200).json(rdvs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
