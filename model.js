const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    buy: {
        type: String,
        required: true
    },
    sell: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    base_unit: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
const data = mongoose.model("DATA", userSchema);
module.exports = data;
