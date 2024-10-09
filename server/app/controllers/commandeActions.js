const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const commande = await tables.commande.readAll();

    if (commande.length) {
      res.json({ result: commande });
    } else {
      res.json({ message: "Aucun utilisateur", result: commande });
    }
    console.info(commande);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const commande = await tables.commande.read(req.params.id);
    if (commande == null) {
      res.sendStatus(404);
    } else {
      res.json(commande);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const commande = req.body;
  console.info(req.body);

  try {
    const affectedRows = await tables.commande.update(req.params.id, commande);

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
  const commande = req.body;

  try {
    const insertId = await tables.commande.create(commande);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const affectedRows = await tables.commande.delete(req.params.id);

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
