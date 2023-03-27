const mongoose = require('mongoose');
 

//db connection
const db = mongoose.connect("mongodb+srv://KUNAL:KUNAL9900@mernapp.oaibt56.mongodb.net/MajorProject", { useNewUrlParser: true,  useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database connected...');
});

module.exports = db;