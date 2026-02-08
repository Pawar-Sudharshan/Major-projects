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
    {
    title: "Clifftop Infinity Pool Resort",
    des: "Perched on a dramatic cliff, this resort features an infinity pool that seems to melt into the ocean horizon.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60",
    price: 3200,
    state: "Santorini",
    country: "Greece"
  },
  {
    title: "Desert Oasis Resort",
    des: "Relax in a lush oasis surrounded by golden sand dunes and star-filled skies at night.",
    img: "https://images.unsplash.com/photo-1543342386-1c8b52328629?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    state: "Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "Urban Boutique Hotel",
    des: "A chic boutique stay with designer interiors, perfect for foodies and nightlife lovers.",
    img: "https://images.unsplash.com/photo-1559599101-7466fe601f5a?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    state: "Berlin",
    country: "Germany"
  },
  {
    title: "Lakeview Glass Cabin",
    des: "Floor-to-ceiling windows offer uninterrupted views of the tranquil lake and surrounding forest.",
    img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    state: "Queenstown",
    country: "New Zealand"
  },
  {
    title: "Tropical Overwater Bungalow",
    des: "Wake up above crystal-clear waters and snorkel right from your private terrace.",
    img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a?auto=format&fit=crop&w=800&q=60",
    price: 4500,
    state: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Countryside Farmstay",
    des: "Experience country life with fresh farm-to-table meals and peaceful green fields.",
    img: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=800&q=60",
    price: 900,
    state: "Cotswolds",
    country: "United Kingdom"
  },
  {
    title: "Art Deco City Hotel",
    des: "Stay in a restored Art Deco landmark with stylish rooms and a rooftop bar.",
    img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a?auto=format&fit=crop&w=800&q=60",
    price: 1700,
    state: "Miami",
    country: "United States"
  },
  {
    title: "Riverside Ryokan Retreat",
    des: "Traditional Japanese hospitality with tatami rooms, hot springs, and river views.",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
    price: 2400,
    state: "Kyoto",
    country: "Japan"
  },
  {
    title: "Forest Eco-Lodge",
    des: "An eco-friendly lodge nestled deep within a lush rainforest teeming with wildlife.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    price: 1900,
    state: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Snowy Nordic Cabin",
    des: "Cozy up by the fireplace and chase the Northern Lights from this remote cabin.",
    img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    state: "Lapland",
    country: "Finland"
  },
  {
    title: "Mediterranean Seaside Hotel",
    des: "Sun-drenched balconies, azure waters, and charming coastal alleys to explore.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    state: "Nice",
    country: "France"
  },
  {
    title: "City Center Business Hotel",
    des: "Modern amenities, conference spaces, and easy access to major commercial hubs.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    price: 1400,
    state: "Singapore",
    country: "Singapore"
  },
  {
    title: "Heritage Palace Stay",
    des: "Live like royalty in a former palace with courtyards, arches, and grand halls.",
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=800&q=60",
    price: 2600,
    state: "Jaipur",
    country: "India"
  },
  {
    title: "Clifftop Jungle Resort",
    des: "Enjoy sweeping valley views from your private plunge pool in the treetops.",
    img: "https://images.unsplash.com/photo-1534131707746-25d604851a1f?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    state: "Chiang Mai",
    country: "Thailand"
  },
  {
    title: "Winery Estate Lodge",
    des: "Stay among rolling vineyards and sample award-winning wines right at the source.",
    img: "https://images.unsplash.com/photo-1439130490301-25e322d88054?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    state: "Napa Valley",
    country: "United States"
  },
  {
    title: "Harborfront Marina Hotel",
    des: "Watch yachts drift by from your balcony and stroll along the bustling promenade.",
    img: "https://images.unsplash.com/photo-1519821172141-b5d8c7f6b9ab?auto=format&fit=crop&w=800&q=60",
    price: 1850,
    state: "Sydney",
    country: "Australia"
  },
  {
    title: "Alpine Wellness Resort",
    des: "Thermal spas, mountain air, and panoramic views make this the perfect wellness escape.",
    img: "https://images.unsplash.com/photo-1534131707746-25d604851a1f?auto=format&fit=crop&w=800&q=60",
    price: 2900,
    state: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Historic Old Town Inn",
    des: "Charming cobblestone streets, local cafes, and a centuries-old inn to call home.",
    img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=60",
    price: 1300,
    state: "Prague",
    country: "Czech Republic"
  },
  {
    title: "Beach Yoga Retreat",
    des: "Start your day with sunrise yoga sessions on a quiet, pristine beach.",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=60",
    price: 1750,
    state: "Goa",
    country: "India"
  },
  {
    title: "Island Surf Lodge",
    des: "A laid-back lodge steps from world-class surf breaks, ideal for adventure seekers.",
    img: "https://images.unsplash.com/photo-1518834356753-68b0d65af140?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    state: "Honolulu",
    country: "United States"
  }

  // ...repeat for all remaining listings, following this transformation
];

module.exports = { data: sampleListings };
