let database = {};

const hasTable = (db, tableName) => !!db[tableName];

const createTable = (db, tableName) => {
  db[tableName] = { name: tableName, rows: [], lastRowId: 0 };
};

const addRowToTable = (db, tableName, data) => {
  if (!hasTable(db, tableName)) createTable(db, tableName);
  const table = db[tableName];
  const newData = Object.assign({ id: table.lastRowId + "" }, data);
  table.rows.push(newData);
  table.lastRowId++;
  return newData;
};

const updateTableRow = (db, tableName, id, data) => {
  let row = getTableRow(db, tableName, id);
  Object.assign(row, data);
  return getTableRow(db, tableName, id);
};

const getTable = (db, tableName) => {
  if (!hasTable(db, tableName)) return null;
  return db[tableName].rows;
};

const getTableRow = (db, tableName, id) => {
  if (!hasTable(db, tableName)) return null;
  return getTable(db, tableName).find((item) => item.id === id);
};

const db = () => ({
  addData(tableName, data) {
    return addRowToTable(database, tableName, data);
  },
  getData(tableName, id) {
    if (!id) return getTable(database, tableName);
    return getTableRow(database, tableName, id);
  },
  updateData(tableNam, id, data) {
    return updateTableRow(database, tableNam, id, data);
  },
  clear() {
    database = {};
  },
});

export default db;
