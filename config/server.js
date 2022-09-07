const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');

// .env
dotenv.config({ path: '.env.local' });
dotenv.config();

// App init
const app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// CORS
if ( process.env.ENV === "dev") {
    app.use(cors());
} else {
    app.use(
        cors({
            credentials: true,
            origin: process.env.URL_TODOS_APP,
        })
    );
}

// Listen PORT
app.listen(process.env.PORT, () => console.log("listing to port " + process.env.PORT));

module.exports = app