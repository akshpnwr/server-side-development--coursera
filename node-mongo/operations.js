// const assert = require("assert");

exports.insertDocument = async (db, document, collection) => {
  try {
    const coll = db.collection(collection);
    const res = await coll.insertOne(document);

    return res;
    // callback(res);
  } catch (error) {
    console.error(error);
  }
};

exports.findDocuments = async (db, collection) => {
  try {
    const coll = db.collection(collection);

    const docs = await coll.find({}).toArray();

    return docs;
    // callback(docs);
  } catch (error) {
    console.error(error);
  }
};

exports.removeDocument = async (db, document, collection) => {
  try {
    const coll = db.collection(collection);
    const res = await coll.deleteOne(document);

    return res;
    // callback(res);
  } catch (error) {
    console.error(error);
  }
};

exports.updateDocument = async (db, document, update, collection) => {
  try {
    const coll = db.collection(collection);

    const res = await coll.updateOne(document, { $set: update });

    return res;
    // callback(res);
  } catch (error) {
    console.error(error);
  }
};
