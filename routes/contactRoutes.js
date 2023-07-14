import express from "express";
const router = express.Router();

import {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
} from "../controllers/contactsController.js";

import testUser from "../middleware/testUser.js";

router.route("/").post(testUser, createContact).get(getAllContacts);
router
  .route("/:id")
  .delete(testUser, deleteContact)
  .patch(testUser, updateContact);

export default router;
