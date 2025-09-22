const express = require("express")
const app = express()
const mongoose = require("mongoose")
const listing = require("listings.js");

MONGO_URL = "mongodb+srv://thikkalboys_db_user:7xCd4ozaYzz4dMFT@cluster0.tyigaei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
main()
.then(()=>{
    console.log("Connected to DB")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err));;
}

app.get("/" , (req ,res)=>{
    res.send("rout is working.")
})

app.get("/sampleTesting", async (req, res) => {
    try {
        const samples = await listing.find();
        console.log(samples);
        res.send(samples);
    } catch (err) {
        res.status(500).send("Error fetching listings");
    }
});

app.listen(8080 , ()=>{
    console.log("server is running.")
})