// Import des librairies
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { dirname } from "node:path";
import path from "node:path";
import { fileURLToPath } from "node:url";
dotenv.config();

// Import des Routes
import { userRoute } from "./routes/user.routes.js";
import { prestataireRoute } from "./routes/prestataire.routes.js";
import { serviceRoute } from "./routes/service.routes.js";
import { demandeRoute } from "./routes/demande.routes.js";
import { authRoute } from "./routes/auth.routes.js";

const app = express();

// Do not identify Express
app.disable("x-powered-by");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Convertir les donnees en json
app.use(express.json());
app.use(cookieParser());
// Static assets
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB database
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("Connected to mongoDB.");
  } catch (err) {
    console.error(err.message);
  }
};
dbConnection();

// Middlewares
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/service", serviceRoute);
app.use("/api/demande", demandeRoute);
app.use("/api/prestataire", prestataireRoute);

// Middlewares to handle the errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Erreur sur le serveur interne.";
  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    stack: err.stack,
  });
});

const port = process.env.PORT || 5001;
app.listen(port, () =>
  console.log(`Server stated at http://localhost:${port}`)
);
