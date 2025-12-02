const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listings.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// MongoDB URL and connection
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

// Middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true })); // <--- required for form parsing
app.use(methodOverride('_method')); // <--- required for method-override
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));


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

// Add new listing
app.post("/listings", async (req, res) => {
  try {
    const listingData = req.body.listings;
    const newListing = new listing(listingData);
    await newListing.save();
    res.redirect("/listings");
  } catch (err) {
    res.status(500).send("Could not create listing");
  }
});

// Edit form route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  try {
    const list = await listing.findById(id);
    res.render("listings/edit", { list });
  } catch (err) {
    res.status(500).send("Error fetching listings");
  }
});

// PUT route for editing listing
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const listingData = req.body.listings;
    await listing.findByIdAndUpdate(id, listingData);
    res.redirect(`/listings/${id}`);
  } catch (err) {
    res.status(500).send("Could not update listing");
  }
});

app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  // console.log("Delete route reached"+ id);
  try {
    await listing.findByIdAndDelete(id);
    res.redirect("/listings");
  } catch (err) {
    res.status(500).send("Could not delete listing");
  }
});

// Start the server
app.listen(8080, () => {
  console.log("server is running.");
});
