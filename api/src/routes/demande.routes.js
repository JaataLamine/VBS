import { Router } from "express";
import {
  deleteDemande,
  createDemande,
  getDemande,
  getDemandes,
  updateDemande,
} from "../controllers/demande.controller.js";
import {
  verifyAdmin,
  verifySuperAdmin,
  verifyUser,
} from "../utils/verifyToken.js";

const router = Router();

/**
 * @route GET api/demande
 * @desc afficher demandes
 */
router.get("/", verifyAdmin, verifySuperAdmin, getDemandes);

/**
 * @route GET api/demande/:id
 * @desc afficher une demande
 */
router.get("/:id", verifyUser, getDemande);

/**
 * @route POST api/demande
 * @desc faire une demande
 */
router.post("/:serviceid", createDemande);

/**
 * @route PUT api/demande/:id
 * @desc maj une demande
 */
router.put("/:id", verifyUser, updateDemande);

/**
 * @route DELETE api/demande/:id
 * @desc supprime une demande
 */
router.delete("/:id", verifyUser, verifyAdmin, verifySuperAdmin, deleteDemande);

export { router as demandeRoute };
