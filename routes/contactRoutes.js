import express from "express";
const router = express.Router();

import {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
} from "../controllers/contactsController.js";

router.route("/").post(createContact).get(getAllContacts);
router.route("/:id").delete(deleteContact).patch(updateContact);

export default router;
