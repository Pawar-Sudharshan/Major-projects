const mongoose = require('mongoose');
// const dotenv = require("dotenv");
// dotenv.config();
// console.log("Mongo URI is: ", process.env.MONGO_URL);
MONGO_URL = "mongodb+srv://thikkalboys_db_user:7xCd4ozaYzz4dMFT@cluster0.tyigaei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err));

// Define the schema
const listingsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  des: {
    type: String
  },
  img: {
    type: String,
   set : (v) => v === ""?"https://unsplash.com/photos/the-sun-is-setting-over-the-mountains-in-the-distance-RsCvxI9h2Ew":v
  },
  price: {
    type: Number,
    min: 1000,
    max: 10000
  },
  state: {
    type: String
  },
  country: {
    type: String
  }
});

// Export the model
const Listing = mongoose.model('Listing', listingsSchema);
module.exports = Listing;
