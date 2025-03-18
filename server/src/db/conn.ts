import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

try {
  const conn = await client.connect();
  db = conn.db("admin");

} catch (e) {
  console.error(e);
}

export default db
