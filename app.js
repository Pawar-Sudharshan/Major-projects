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

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Use express urlencoded parser (fix here!)
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("route is working.");
});

// Show all listings
app.get("/listings", async (req, res) => {
  try {
    const allListings = await listing.find({});
    res.render("listings/index", { listings: allListings });
  } catch (err) {
    res.status(500).send("Error fetching listings");
  }
});

// Render new listing form
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
});


// Show individual listing
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const list = await listing.findById(id);
    res.render("listings/show", { list });
  } catch (err) {
    res.status(500).send("Error fetching listings");
  }
});

// Handle form submission for new listing (add this)
app.post("/listings", async (req, res) => {
  try {
    const { title, desc, price, state, country, img } = req.body;
    const newListing = new listing({ title, desc, price, state, country, img });
    await newListing.save();
    res.redirect("/listings");
  } catch (err) {
    res.status(500).send("Could not create listing");
  }
});

app.listen(8080, () => {
  console.log("server is running.");
});
