const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: 'Rute tidak ditemukan' });
};

const errorHandler = (err, req, res, next) => {
  
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Format JSON tidak valid' });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Format ID tidak valid' });
  }
  if (err.name === 'ValidationError') {
    const detail = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      message: 'Data tidak valid',
      detail
    });
  }
  if (err.code === 11000) {
    return res.status(409).json({ message: 'Data unik sudah terdaftar' });
  }

  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

 
  res.status(500).json({ message: 'Terjadi kesalahan pada server' });
};

module.exports = { notFoundHandler, errorHandler };