const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const app = express();
app.use(express.json());

const startMemoryServer = async () => {
  try {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
    console.log("Terhubung ke MongoDB Memory Server");
    await seedDatabase();
  } catch (err) {
    console.error("Koneksi MongoDB gagal:", err);
  }
};

const StafSchema = new mongoose.Schema({
  namaStaf: { type: String, required: true },
  spesialisasi: { type: String, required: true }
});
