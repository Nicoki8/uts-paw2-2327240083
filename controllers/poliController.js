const Poli = require('../models/Poli');

exports.createPoli = async (req, res, next) => {
  try {
    const { kode, nama } = req.body;
    const poli = await Poli.create({ kode, nama });
    res.status(201).json(poli);
  } catch (error) {
    next(error);
  }
};

exports.getAllPoli = async (req, res, next) => {
  try {
    const poliList = await Poli.find();
    res.status(200).json(poliList);
  } catch (error) {
    next(error);
  }
};