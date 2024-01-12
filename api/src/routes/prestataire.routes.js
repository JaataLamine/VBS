import { Router } from "express";
import {
  getPrestataires,
  pendingPrestataires,
  register,
} from "../controllers/prestataire.controller.js";

const router = Router();

/**
 * @route GET api/prestataires
 * @desc affichage du tableau
 *           de prestataires
 */
router.get("/", getPrestataires);

/**
 * @route GET api/prestataires/register
 * @desc afficher prestataires en attente
 *      de validation par superAdmin
 */
router.get("/pending", pendingPrestataires);

/**
 * @route POST api/prestataires/register
 * @desc enregistement prestataire
 */
router.post("/register", register);

/**
 * @route PUT api/prestataires/register/:id
 * @desc maj d'un prestataire
 */

/**
 * @route DELETE api/prestataires/register/:id
 * @desc suppression d'un prestataire
 */

export { router as prestataireRoute };
