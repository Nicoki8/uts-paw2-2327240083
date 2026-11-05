const mongoose = require('mongoose');

const poliSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: [true, 'Kode poli wajib diisi'],
    unique: true,
    uppercase: true,
    trim: true
  },
  nama: {
    type: String,
    required: [true, 'Nama poli wajib diisi'],
    trim: true
  }
}, { timestamps: false, versionKey: false });

module.exports = mongoose.model('Poli', poliSchema);