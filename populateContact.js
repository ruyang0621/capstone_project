import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Contact from "./models/Contact.js";

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    await Contact.deleteMany();

    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data-contact.json", import.meta.url))
    );
    await Contact.create(jsonProducts);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
