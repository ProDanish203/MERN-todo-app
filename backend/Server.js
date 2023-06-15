// Basic necessary imports
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// Configuring the .env file
require("dotenv").config();

// Setting the route for todos
const todo = require("./routes/TodoRoute")

const app = express();
const port = process.env.PORT | 5000;

// Setting the reading and writing data compatibility
app.use(express.json());
app.use(cors());



// Connecting to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Databse Connected"))
    .catch((e) => console.log(e))


// Using the todo router
app.use("/api/v1", todo);


// Listening the application on server
app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
})
