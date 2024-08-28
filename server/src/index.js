const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("../routers/addRoutes");
const db = require("../config/db");

dotenv.config(); 

// mongoconnection
db();

app.use(cors());

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router); 

app.listen(port, () => {
    console.log(`Server is working on http://${hostname}:${port}`); // Fixed URL format
});
