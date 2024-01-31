const express = require ("express");
const bodyParser = require("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv");
require("dotenv").config();
const { connectDB } = require("./utils/connection");
const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//routes
const ItemRouter = require('./routes/item.routes');

//api middleware 
app.use("/api/", ItemRouter);

const PORT = 8070 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`🚀 :: Server is up and running on PORT number: ${PORT}`);
connectDB();

})

