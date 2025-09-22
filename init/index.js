const mongoose = require("mongoose");
const initalData = require("./data.js");
const Listing = require("../models/listings.js");

const MONGO_URL = "mongodb+srv://thikkalboys_db_user:7xCd4ozaYzz4dMFT@cluster0.tyigaei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB Atlas");
  await initDB();
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initalData.data);
  console.log("Database initialized with sample data");
}

main().catch(err => console.log(err));
