import Contact from "../models/Contact.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";

const createContact = async (req, res) => {
  const { name, company } = req.body;
  if (!name || !company) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  const contact = await Contact.create(req.body);
  res.status(StatusCodes.CREATED).json({ contact });
};

const getAllContacts = async (req, res) => {
  res.send("Get All Contacts");
};

const updateContact = async (req, res) => {
  res.send("Update Contact");
};

const deleteContact = async (req, res) => {
  res.send("Delete Contact");
};

export { createContact, getAllContacts, updateContact, deleteContact };
