const mongoose = require('mongoose');
const config = require('config');

const dbConnect = async () => {
    try {
        await mongoose.connect(
            `mongodb://${config.get('dbConfig.host')}:${config.get('dbConfig.port')}/${config.get('dbConfig.dbName')}`, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
                useCreateIndex: true
            }
        );
        console.log('mongoDB connected');
    }catch(error) {
        console.log(error);
    }
    
}

module.exports = dbConnect;
