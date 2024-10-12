const AbstractRepository = require("./AbstractRepository");

class ProduitRepository extends AbstractRepository {
  constructor() {
    super({ table: "produit" });
  }

  async create(produit) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, title, prix, image_url, description) values (?, ?, ?, ?, ?)`,
      [
        produit.id,
        produit.title,
        produit.prix,
        produit.image_url,
        produit.description,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const query = `select * from ${this.table} where id = ?`;
    const [rows] = await this.database.query(query, [id]);
    if (rows.length === 0) {
      return null;
    }
    const produit = {
      id: rows[0].id,
      image_url: rows[0].image_url,
      title: rows[0].title,
      description: rows[0].description,
    };
    return produit;
  }

  async readRandom(limit = 1) {
    const [rows] = await this.database.query(
      `select * from ${this.table} ORDER BY RAND() LIMIT ? `,
      [parseInt(limit, 10)]
    );
    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(produit) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} set title = ?, prix = ?, image_url = ?, description = ?, WHERE id = ?`,
      [
        produit.title,
        produit.prix,
        produit.image_url,
        produit.description,
        produit.id,
      ]
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

  async search(term) {
    const [rows] = await this.database.query(
      `SELECT id, title, image_url FROM ${this.table} WHERE title LIKE ?`,
      [`%${term}%`]
    );
    return rows;
  }
}

module.exports = ProduitRepository;
