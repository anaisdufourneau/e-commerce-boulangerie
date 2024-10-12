const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const produit = await tables.produit.readAll();
    res.json(produit);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const produit = await tables.produit.read(req.params.id);
    res.json(produit);
  } catch (err) {
    next(err);
  }
};
const readRandom = async (req, res, next) => {
  const { limit } = req.query;
  try {
    const produitRandom = await tables.produit.readRandom(limit || 1);
    res.json(produitRandom);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const produit = { ...req.body, id: req.params.id };

  try {
    await tables.produit.update(produit);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { title, description, filename } = req.body;

    const produitId = await tables.produit.create({
      image_url: filename,
      title,
      description,
    });
    res.status(200).json({ success: true, produitId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const affectedRows = await tables.produit.delete(req.params.id);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  readRandom,
  edit,
  add,
  destroy,
};
