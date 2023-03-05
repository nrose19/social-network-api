const { connect, connection } = require('mongoose');

const connectionString = 
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:217017/socialNetworkApiDB';

connect(connectionString, {
    userNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = connection;