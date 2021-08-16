// import third party libraries
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

// configure server
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());



// connect mongoose
require('./config/mongoose.config');

// connect routes
// require('./routes/product.route') (app);

app.listen(port, () => console.log(`Server is listening on Port ${port}`));