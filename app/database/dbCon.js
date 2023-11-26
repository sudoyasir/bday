const { MongoClient } = require('mongodb');

// Replace the connection string with your MongoDB Atlas connection string
const uri = 'mongodb+srv://yasir2002:EliteBook2002@cluster0.vgcb7fd.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Access your database, collection, perform CRUD operations here

  } finally {
    // Close the connection when your app is terminated
    await client.close();
  }
}

run().catch(console.error);
