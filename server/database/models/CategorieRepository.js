const AbstractRepository = require("./AbstractRepository");

class CategorieRepository extends AbstractRepository {
  constructor() {
    super({ table: "categorie" });
  }

  async create(categorie) {
    const [result] = await this.database.query(
      `insert into ${this.table} (id, name) values (?, ?)`,
      [categorie.id, categorie.name]
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

  async readWithProduit(id, limit = 5) {
    const [rows] = await this.database.query(
      `
      SELECT ${this.table}.*, produit.id AS produitId, produit.name AS produitName, produit.image_url AS produitImage_url from ${this.table}
      INNER JOIN produit ON ${this.table}.id = produit.categorie_id
      WHERE ${this.table}.id = ? ORDER BY RAND() LIMIT ?
      `,

      [id, limit, 10]
    );

    const response = {
      id: rows[0].id,
      name: rows[0].name,
      produits: [],
    };

    rows.forEach((row) => {
      response.produits.push({
        id: row.produitId,
        title: row.produitTitle,
        image_url: row.produitImage_url,
      });
    });
    return response;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(categorie) {
    const [result] = await this.database.query(
      `update ${this.table} set id = ? WHERE name = ?`,
      [categorie.id, categorie.name]
    );
    return result.affectedRows;
  }
}

module.exports = CategorieRepository;
