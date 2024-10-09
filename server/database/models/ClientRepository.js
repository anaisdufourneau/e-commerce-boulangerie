const AbstractRepository = require("./AbstractRepository");

class ClientRepository extends AbstractRepository {
  constructor() {
    super({ table: "client" });
  }

  async create(client) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email ) values (?, ?, ?)`,
      [client.firstname, client.lastname, client.email]
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

  async update(id, client) {
    console.info(client);
    const [result] = await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?,  where id = ?`,
      [client.firstname, client.lastname, client.email, id]
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

module.exports = ClientRepository;
