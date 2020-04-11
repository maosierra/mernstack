const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI || 'mongodb://localhost/mernstack';

mongoose.Promise = global.Promise;

mongoose.connect(URI, {
    useMongoClient: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB connected to: ' + URI);
});