const AbstractRepository = require("./AbstractRepository");

class ProduitRepository extends AbstractRepository {
  constructor() {
    super({ table: "produit" });
  }

  async create(produit) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, title, prix, image_url, description, categorie_id) values (?, ?, ?, ?, ?, ?)`,
      [
        produit.id,
        produit.title,
        produit.prix,
        produit.image_url,
        produit.description,
        produit.categorie_id,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const query = `
      SELECT 
        produit.*,
        categorie.name AS categorie_name FROM ${this.table} 
        INNER JOIN categorie ON produit categorie_id = categorie.id
        LEFT JOIN commande ON produit.id = commande.produit_id
        WHERE produit.id = ?
    `;

    const [rows] = await this.database.query(query, [id]);

    if (rows.length === 0) {
      return null;
    }

    const produit = {
      id: rows[0].id,
      image_url: rows[0].image_url,
      title: rows[0].title,
      description: rows[0].description,
      categorie: rows[0].categorie_name,
      commande: [],
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
      `UPDATE ${this.table} set name = ?, prix = ?, image_url = ?, description = ?, categorie_id = ?, WHERE id = ?`,
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
