require("dotenv").config();
require("../../config/mongodb"); // fetch the db connection
const User = require("../../models/User.model")
const axios = require("axios");

const data = {
  "darkMode": false,
  "favourites": [],
  "listLength": 20,
}
async function insertMain() {
    try {
     await User.deleteMany();
     const inserted = await User.create(data); // insert docs in db
     console.log(`seed review done : ${inserted.length} documents inserted !`);
   
    } catch (err) {
       console.log(err);
     }
   
   }

   // console.log(breweryData);
   
//  insertMain()

// addBeerID()