const mongoose = require('mongoose');

const alamatSchema = new mongoose.Schema({
  jalan: { type: String, trim: true },
  kota: { type: String, trim: true }
}, { _id: false });

const pasienSchema = new mongoose.Schema({
  noRekamMedis: {
    type: String,
    required: [true, 'No Rekam Medis wajib diisi'],
    unique: true,
    trim: true
  },
  nama: {
    type: String,
    required: [true, 'Nama pasien wajib diisi'],
    trim: true
  },
  umur: {
    type: Number,
    required: [true, 'Umur wajib diisi'],
    min: [0, 'Umur minimal 0']
  },
  golonganDarah: {
    type: String,
    required: [true, 'Golongan darah wajib diisi'],
    trim: true
  },
  alamat: {
    type: alamatSchema,
    required: [true, 'Alamat wajib diisi']
  },
  poliId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poli',
    required: [true, 'Poli wajib dipilih']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false });

module.exports = mongoose.model('Pasien', pasienSchema);