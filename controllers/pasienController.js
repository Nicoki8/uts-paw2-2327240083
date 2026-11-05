const Pasien = require('../models/Pasien');

exports.createPasien = async (req, res, next) => {
  try {
    const { noRekamMedis, nama, umur, golonganDarah, alamat, poliId } = req.body;
    const pasien = await Pasien.create({
      noRekamMedis,
      nama,
      umur,
      golonganDarah,
      alamat,
      poliId
    });
    res.status(201).json(pasien);
  } catch (error) {
    next(error);
  }
};

exports.getAllPasien = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.golonganDarah) {
      filter.golonganDarah = req.query.golonganDarah;
    }

    let query = Pasien.find(filter);

    if (req.query.sort) {
      const sortField = req.query.sort;
      query = query.sort({ [sortField]: 1 });
    }

    const pasienList = await query;
    res.status(200).json(pasienList);
  } catch (error) {
    next(error);
  }
};

exports.getPasienById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pasien = await Pasien.findById(id).populate('poliId', 'kode nama');

    if (!pasien) {
      const error = new Error('Data pasien tidak ditemukan');
      error.status = 404;
      return next(error);
    }

    res.status(200).json(pasien);
  } catch (error) {
    next(error);
  }
};