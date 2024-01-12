import { Prestataire } from "../models/Prestataire.js";

export const getPrestataires = async (req, res) => {
  try {
    // Recuperation des prestataires enregistres
    const response = await Prestataire.find({});
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const pendingPrestataires = async (req, res) => {
  try {
    // Recuperation prestataires en attente de validation
    const response = await Prestataire.find({ validation: false });
    res.status(200).json(response);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export const register = async (req, res) => {
  const prestataire = new Prestataire(req.body);
  try {
    await prestataire.save();
    res.json(prestataire);
  } catch (err) {
    res.status(400).json(err);
  }
};
