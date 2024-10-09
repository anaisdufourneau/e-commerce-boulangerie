const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categorie = await tables.categorie.readAll();
    res.json(categorie);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const categorie = await tables.categorie.readWithProduit(
      Number(req.params.id)
    );

    console.info(categorie);
    if (categorie != null) {
      res.status(200).json(categorie);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const categorie = req.body;

  try {
    const insertId = await tables.categorie.create(categorie);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const categorie = req.body;
  try {
    await tables.categorie.update(categorie);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  edit,
};
