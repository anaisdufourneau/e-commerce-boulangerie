const AbstractRepository = require("./AbstractRepository");

class CommandeRepository extends AbstractRepository {
  constructor() {
    super({ table: "commande" });
  }

  async create(commande) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, client_id, quantite) values (?, ?, ?)`,
      [commande.id, commande.client_id, commande.quantite]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(commande) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} set client_id = ?, quantite = ?, WHERE id = ?`,
      [commande.client_id, commande.quantite, commande.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = CommandeRepository;
