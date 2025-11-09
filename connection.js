const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
// client.connect()
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch(err => {
//     console.error('Connection error:', err);    
// })
// .finally(() => {
//     client.close();
// })

async function insert(){
    try{
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('university');
        const collection = db.collection('students');
        const result = await collection.insertOne({name:'Abdullahi Ibrahim', department:'Computer Science', address: 'Mogadishu'});
        console.log('Insertion result:', result.insertedId);

    }catch(err){
        console.error('Insertion error:', err);
    }
}
insert();