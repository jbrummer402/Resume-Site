const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const credentials = 'C:\Users\jackm\Desktop\Code\Resume-Site\server\config\X509-cert-9053477847688681488.pem'

const client = new MongoClient('mongodb+srv://resumesitecluster.sgdlp.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1
});

module.exports = async () => {
    try {
        await client.connect();
        const database = client.db("testDB");
        const collection = database.collection("testCol");
        const docCount = await collection.countDocuments({});
        console.log(docCount);
        // perform actions using client
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}