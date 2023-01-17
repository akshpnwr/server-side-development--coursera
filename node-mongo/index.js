const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://localhost:27017/";
  const dbName = "conFusion";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("connection succesfull");
    const db = client.db(dbName);

    const collection = db.collection("dishes");

    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);

    const res = await collection.insertOne({
      name: "momos",
      description: "non-veg",
    });

    console.log("Inserted with _id : ", res.insertedId);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
