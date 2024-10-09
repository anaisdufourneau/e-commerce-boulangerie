const AbstractRepository = require("./AbstractRepository");

class ProduitRepository extends AbstractRepository {
  constructor() {
    super({ table: "produit" });
  }

  async create(produit) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, name, prix, categorie_id) values (?, ?, ?, ?)`,
      [produit.id, produit.name, produit.prix, produit.categorie_id]
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

  async update(produit) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} set name = ?, prix = ?,  categorie_id = ?, WHERE id = ?`,
      [produit.name, produit.prix, produit.categorie_id, produit.id]
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

module.exports = ProduitRepository;
