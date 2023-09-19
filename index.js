const express = require("express")
const mongoose = require("mongoose");
const app = express()
const port = 5000
const cors = require("cors")
mongoose.connect("mongodb+srv://malaydev207:FOxjk8n4MoiLXMLa@cluster0.aoay7je.mongodb.net/Fetchqbtech").then(
    () => {
        console.log("Database Connected")
    }
).catch(
    (err) => {
        console.log(err)
    }
)
app.use(cors());
app.use(express.json())
app.use("/api/data", require("./router"));
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})