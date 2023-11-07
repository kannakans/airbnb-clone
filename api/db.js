const { MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
let client

const getConnection = async () => {
  client = await MongoClient.connect(url)
  return client;
}

const createIndexs = async () => {
  await (await getConnection()).db('airbnb').collection('Users').createIndex({email: 1}, {unique: true});
}
createIndexs()

const insert = async (collection, values) => {
  const document = await (await getConnection()).db('airbnb').collection(collection).insertOne(values)
  return document
}

const find = async (collection, query) => {
  const document = await (await getConnection()).db('airbnb').collection(collection).find(query).toArray()
  return document
}

const update = async (collection, query, doc) => {
  const document = await (await getConnection()).db('airbnb').collection(collection).updateMany(query, { $set: doc})
  return document
}

const aggregate = async (collection, pipeline) => {
  const document = await (await getConnection()).db('airbnb').collection(collection).aggregate(pipeline).toArray()
  return document
}

module.exports = Object.freeze({
  insert,
  find,
  update,
  aggregate,
})

