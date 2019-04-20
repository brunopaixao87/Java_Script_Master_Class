import Parser from './parse';
import DatabaseError from './databaseError';

export default class Database {
  constructor() {
    this.tables = {};
    this.parser = new Parser();
  }

  createTable(parsedStatement) {
    let [, tableName, columns] = parsedStatement;
    this.tables[tableName] = {
      columns: {},
      data: []
    };
    columns = columns.split(",");
    for (let column of columns) {
      column = column.trim().split(" ");
      const [name, type] = column;
      this.tables[tableName].columns[name] = type;
    }
  }

  insert(parsedStatement) {
    let [, tableName, columns, values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");
    let row = {};
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const value = values[i];
      row[column] = value;
    }
    this.tables[tableName].data.push(row);
  }

  select(parsedStatement) {
    let [, columns, tableName, whereClasure] = parsedStatement;
    columns = columns.split(", ");
    let rows = this.tables[tableName].data;
    if (whereClasure) {
      const [columnWhere, valueWhere] = whereClasure.split(" = ");
      rows = rows.filter(row => row[columnWhere] === valueWhere);
    }
    rows = rows.map(row => {
      let selectedRow = {};
      columns.forEach(column => {
        selectedRow[column] = row[column];
      });
      return selectedRow;
    });
    return rows;
  }

  delete(parsedStatement) {
    let [, tableName, whereClasure] = parsedStatement;
    if (whereClasure) {
      const [columnWhere, valueWhere] = whereClasure.split(" = ");
      this.tables[tableName].data = this.tables[tableName].data.filter(
        row => row[columnWhere] !== valueWhere
      );
      return;
    }

    this.tables[tableName].data = [];
  }

  execute(statement) {
    const result = this.parser.parse(statement);
    if (result) {
      return this[result.command](result.parsedStatement);
    }
    const message = `Syntax error: "${statement}"`;
    throw new DatabaseError(statement, message);
  }
}