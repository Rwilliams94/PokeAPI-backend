const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    favourites: [{type: String}],
    darkMode: Boolean,
    listLength: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
