require("dotenv").config();

// import third party libraries
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser');



// configure server
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(cookieParser());


// connect mongoose
require('./config/mongoose.config');

// connect routes
require('./routes/product.route') (app);

// connect login, logout, register routes
require('./routes/user.route')(app);

// have server listen on port
app.listen(port, () => console.log(`Server is listening on Port ${port}`));