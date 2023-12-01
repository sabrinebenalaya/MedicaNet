const Ordonnance = require('../Model/Ordonnance');
const Medicament = require('../Model/Medicament');

// Contrôleur pour créer une ordonnance
exports.createOrdonnance = async (req, res) => {
  try {
    const { patient, datePrescription, medicaments } = req.body;
    const createdMedicaments = [];

    for (const medicamentObj of medicaments) {
      const stockMedicament = Math.ceil(medicamentObj.stock * 90 / 30) * 30;

        medicament = new Medicament({
          nom: medicamentObj.medicament,
          stock: stockMedicament
        });
        await medicament.save();
     

      createdMedicaments.push({
        medicament: medicament._id,
        quantite: stockMedicament
      });
    }

    const ordonnance = new Ordonnance({
      patient,
      medicaments: createdMedicaments,
      datePrescription: datePrescription
    });

    await ordonnance.save();

    // Associer les médicaments à l'ordonnance créée
    for (const medicamentObj of createdMedicaments) {
      const medicament = await Medicament.findById(medicamentObj.medicament);
      console.log("ordonnance._id", ordonnance._id)
      medicament.ordonnance = ordonnance._id;
      console.log("medicament", medicament)

      await medicament.save();
    }

    res.status(201).json(ordonnance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contrôleur pour récupérer toutes les ordonnances
exports.getAllOrdonnances = async (req, res) => {
  try {
    const ordonnances = await Ordonnance.find();
    res.status(200).json(ordonnances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contrôleur pour récupérer une ordonnance par son ID
exports.getOrdonnanceById = async (req, res) => {
  try {
    const ordonnance = await Ordonnance.findById(req.params.id);
    if (!ordonnance) {
      return res.status(404).json({ message: 'Ordonnance not found' });
    }
    res.status(200).json(ordonnance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contrôleur pour mettre à jour une ordonnance par son ID
exports.updateOrdonnance = async (req, res) => {
  try {
    const ordonnance = await Ordonnance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ordonnance) {
      return res.status(404).json({ message: 'Ordonnance not found' });
    }
    res.status(200).json(ordonnance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Contrôleur pour supprimer une ordonnance par son ID
exports.deleteOrdonnance = async (req, res) => {
  try {
    const ordonnance = await Ordonnance.findByIdAndDelete(req.params.id);
    if (!ordonnance) {
      return res.status(404).json({ message: 'Ordonnance not found' });
    }
     const ordonnances = await Ordonnance.find();
    res.status(200).json(ordonnances);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
