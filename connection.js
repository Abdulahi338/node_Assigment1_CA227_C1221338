const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
client.connect()
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Connection error:', err);    
})
.finally(() => {
    client.close();
})