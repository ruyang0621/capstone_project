import Contact from "../models/Contact.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import validator from "validator";

const createContact = async (req, res) => {
  const { name, company } = req.body;
  if (!name || !company) {
    throw new BadRequestError("Please provide all values");
  }

  if (req.body.email && !validator.isEmail(req.body.email)) {
    throw new BadRequestError("Please provide a valid email");
  }

  if (req.body.phoneNumber && !validator.isMobilePhone(req.body.phoneNumber)) {
    throw new BadRequestError("Please provide a valid phone number");
  }

  req.body.createdBy = req.user.userId;
  const contact = await Contact.create(req.body);
  res.status(StatusCodes.CREATED).json({ contact });
};

const getAllContacts = async (req, res) => {
  const { name, company, sort } = req.query;

  const queryObject = {
    createdBy: req.user.userId,
  };

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }

  // NO AWAIT
  let result = Contact.find(queryObject);

  // CHAIN SORT
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("name");
  }
  if (sort === "z-a") {
    result = result.sort("-name");
  }

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const contacts = await result;

  const totalContacts = await Contact.countDocuments(queryObject);
  const numOfContactPages = Math.ceil(totalContacts / limit);

  res
    .status(StatusCodes.OK)
    .json({ contacts, totalContacts, numOfContactPages });
};

const updateContact = async (req, res) => {
  const { id: contactId } = req.params;
  const { name, company, note } = req.body;

  if (!name || !company) {
    throw new BadRequestError("Please provide all values");
  }

  if (req.body.email && !validator.isEmail(req.body.email)) {
    throw new BadRequestError("Please provide a valid email");
  }

  if (req.body.phoneNumber && !validator.isMobilePhone(req.body.phoneNumber)) {
    throw new BadRequestError("Please provide a valid phone number");
  }

  const contact = await Contact.findOne({ _id: contactId });

  if (!contact) {
    throw new NotFoundError(`No contact with id ${contactId}`);
  }

  checkPermissions(req.user, contact.createdBy);

  contact.name = name;
  contact.company = company;
  contact.note = note;
  contact.lastName = req.body.lastName || undefined;
  contact.email = req.body.email || undefined;
  contact.phoneNumber = req.body.phoneNumber || undefined;

  await contact.save();

  res.status(StatusCodes.OK).json({ contact });
};

const deleteContact = async (req, res) => {
  const { id: contactId } = req.params;
  const contact = await Contact.findOne({ _id: contactId });

  if (!contact) {
    throw new NotFoundError(`No job with id: ${contactId}`);
  }

  checkPermissions(req.user, contact.createdBy);

  await contact.deleteOne();
  res
    .status(StatusCodes.OK)
    .json({ msg: "The contact was removed successfully!" });
};

export { createContact, getAllContacts, updateContact, deleteContact };
