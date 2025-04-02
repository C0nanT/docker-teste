const mongoose = require('mongoose');

mongoose
    .connect('mongodb://mongo:27017/test')
    .then(() => console.log('Connected to MongoDBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));