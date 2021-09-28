const mongoose = require('mongoose');
const dbName = "wild_db";
// const dbName = process.env.DB_NAME;

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


mongoose.connect('mongodb://localhost/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(() => console.log(`Established connect to the "${dbName}" database`))
    .catch(err => console.log(`Error establishing "${dbName}" connection`, err));   
    // .then(() => console.log("Established connect to the " + process.env.DB_NAME + " database"))
    // .catch(err => console.log("Error establishing " + process.env.DB_NAME +  "connection", err)); 