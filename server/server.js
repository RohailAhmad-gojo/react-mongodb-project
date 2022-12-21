const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://rohail:rohail123@spiper.tw916gf.mongodb.net/?retryWrites=true&w=majority")

//require routes
app.use("/", require("./routes/noteRoutes"))

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})