import { MongoClient, ServerApiVersion, Db } from "mongodb";

const uri = process.env.DB_CONNECT || "";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db: Db;

try {
  const conn = await client.connect();
  db = conn.db("admin");

} catch (e) {
  console.error(e);
}

export default db!
