const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const clients = await tables.client.readAll();

    if (clients.length) {
      res.json({ result: clients });
    } else {
      res.json({ message: "Aucun utilisateur", result: clients });
    }
    console.info(clients);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const client = await tables.client.read(req.params.id);
    if (client == null) {
      res.sendStatus(404);
    } else {
      res.json(client);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const client = req.body;
  console.info(req.body);

  try {
    const affectedRows = await tables.client.update(req.params.id, client);

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
  const client = req.body;

  try {
    const insertId = await tables.client.create(client);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const affectedRows = await tables.client.delete(req.params.id);

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
