const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    console.info(user);
    const [result] = await this.database.query(
      `insert into ${this.table} ( username, password, email, role) values (?, ?, ?, ?)`,
      [user.username, user.password, user.email, user.role]
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

  async update(id, user) {
    console.info(user);
    const [result] = await this.database.query(
      `update ${this.table} set fullname = ?, username = ?, email = ?, civility = ? where id = ?`,
      [user.username, user.email, id]
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

  async readByEmail(email) {
    const [result] = await this.database.query(
      `select * from ${this.table} WHERE email = ?`,
      [email]
    );
    return result[0];
  }
}

module.exports = UserRepository;
