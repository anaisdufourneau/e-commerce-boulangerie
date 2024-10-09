const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const admin = await tables.admin.readAll();

    if (admin.length) {
      res.json({ result: admin });
    } else {
      res.json({ message: "Aucun utilisateur", result: admin });
    }
    console.info(admin);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const admin = await tables.admin.read(req.params.id);
    if (admin == null) {
      res.sendStatus(404);
    } else {
      res.json(admin);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const admin = req.body;
  console.info(req.body);

  try {
    const affectedRows = await tables.admin.update(req.params.id, admin);

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
  const admin = req.body;

  try {
    const insertId = await tables.admin.create(admin);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const affectedRows = await tables.admin.delete(req.params.id);

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
