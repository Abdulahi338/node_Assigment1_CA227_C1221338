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
        // const result = await collection.insertOne({name:'Ahmed Ibrahim', department:'BA', address: 'Mogadishu', year:3});

        //inset mony

        const insertMony = await collection.insertMany([
            {name:'Sara Ali', department:'CS', address: 'Hargeisa', year:2},
            {name:'Omar Hassan', department:'IT', address: 'Bosaso', year:1},
            {name:'Laila Yusuf', department:'ENG', address: 'Kismayo', year:4}
        ]);
        console.log('Insertion result:', insertMony.insertedIds);
        // console.log('Insertion result:', result.insertedId);

    }catch(err){
        console.error('Insertion error:', err);
    }
}
insert();