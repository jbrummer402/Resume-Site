const MongoClient = require("mongodb").MongoClient;
const path = require("path");

console.log(process.env.mongoDbUrl);

const settings = {
  mongoConfig: {
    serverUrl: process.env.mongoDbUrl,
    database: process.env.mongoDbName,
  },
};

const config = settings.mongoConfig;
let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(config.serverUrl, {
      useNewUrlParser: true,
    });
    _db = await _connection.db(config.database);
  }

  return _db;
};
