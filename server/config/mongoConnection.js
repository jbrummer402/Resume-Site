const fs = require("fs");

const { MongoClient, ServerApiVersion } = require("mongodb");

const credentials =
  "./X509-cert-9053477847688681488.pem";

const client = new MongoClient(
  "mongodb+srv://resumesitecluster.sgdlp.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
  {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = async () => {
  try {
    await client.connect();
    const database = client.db("ResumeSite");

    // perform actions using client
    return database;
  } catch (err) {
    return err;
  }
};
