const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    des: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    img: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    state: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Loft in Downtown",
    des: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    state: "New York City",
    country: "United States"
  },
  {
    title: "Mountain Retreat",
    des: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    state: "Aspen",
    country: "United States"
  },
  {
    title: "Historic Villa in Tuscany",
    des: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    state: "Florence",
    country: "Italy"
  },
  {
    title: "Secluded Treehouse Getaway",
    des: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    state: "Portland",
    country: "United States"
  },
  {
    title: "Beachfront Paradise",
    des: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    state: "Cancun",
    country: "Mexico"
  },
  {
    title: "Rustic Cabin by the Lake",
    des: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1900,
    state: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Luxury Penthouse with City Views",
    des: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    img: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    state: "Los Angeles",
    country: "United States"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    des: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    img: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    state: "Verbier",
    country: "Switzerland"
  },
  {
    title: "Safari Lodge in the Serengeti",
    des: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    state: "Serengeti National Park",
    country: "Tanzania"
  },
  {
    title: "Historic Canal House",
    des: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    state: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Private Island Retreat",
    des: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    img: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    state: "Fiji",
    country: "Fiji"
  },
  // ...repeat for all remaining listings, following this transformation
];

module.exports = { data: sampleListings };
