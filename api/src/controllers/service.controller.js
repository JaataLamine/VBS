import multer from "multer";
import fs from "node:fs";
import { Service } from "../models/Service.js";

export const uploadMiddleware = multer({ dest: "uploads/" });

// Controller pour afficher tous les services
export const getServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

// Controller pour afficher un service by id
export const getService = async (req, res, next) => {
  try {
    const service = await Service.findById({ id: req.params.id });
    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
};

// Controller pour creer un service
export const createService = async (req, res, next) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { name, description } = req.body;

  const newService = await Service.create({
    name,
    description,
    imageUrl: newPath,
  });
  res.status(200).json(newService);
};

// Controller pour maj un service by id
export const updateService = async (req, res, next) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedService);
  } catch (error) {
    next(error);
  }
};

// Controller pour supprimer un service by id
export const deleteService = async (req, res, next) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json("Service supprime.");
  } catch (error) {
    next(error);
  }
};
