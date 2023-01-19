const { MongoClient, Collection } = require("mongodb");
const dboper = require("./operations");
async function main() {
  const uri = "mongodb://localhost:27017/";
  const dbName = "conFusion";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("connection succesfull");
    const db = client.db(dbName);

    const toBeInserted = {
      name: "roll",
      description: "veg double paneer",
    };

    const res = await dboper.findDocuments(db, "dishes");

    console.log("Found Results => ", res);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
