const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listings.js");
const path = require("path");

const MONGO_URL = "mongodb+srv://thikkalboys_db_user:7xCd4ozaYzz4dMFT@cluster0.tyigaei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error(err);
  }
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("route is working.");
});

app.get("/listings", async (req, res) => {
  try {
    const allListings = await listing.find({});
    res.render("listings/index", { listings: allListings });
  } catch (err) {
    res.status(500).send("Error fetching listings");
  }
});

app.listen(8080, () => {
  console.log("server is running.");
});
