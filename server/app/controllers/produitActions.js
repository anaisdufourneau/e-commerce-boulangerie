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
    const produit = await tables.produit.read(Number(req.params.id));
    if (produit == null) {
      res.sendStatus(404);
    } else {
      res.json(produit);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const produit = req.body;
  console.info(req.body);

  try {
    const affectedRows = await tables.produit.update(req.params.id, produit);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const produit = req.body;

  try {
    const insertId = await tables.produit.create(produit);
    res.status(201).json({ insertId });
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
  edit,
  add,
  destroy,
};
