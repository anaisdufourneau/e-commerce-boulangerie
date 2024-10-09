const AbstractRepository = require("./AbstractRepository");

class AdminRepository extends AbstractRepository {
  constructor() {
    super({ table: "admin" });
  }

  async create(admin) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, email, password ) values (?, ?, ?)`,
      [admin.name, admin.email, admin.password]
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
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(id, admin) {
    console.info(admin);
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, email = ?, password = ?,  where id = ?`,
      [admin.name, admin.email, admin.password, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = AdminRepository;
