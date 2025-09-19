const mongoose = require("mongoose")
const schema = mongoose.schema()

const listings = new schema({
    title :{
        type : String,
        require : true
    },
    des : {
        type : String
    },
    img : {
        type: String
    },
    price:{
        type:Number,
        Range : (1000 , 10000)
    },
    state : {
        type : String
    },
    country:{
        type:String
    }

})

const listing = mongoose.model(listings , schema);
module.export = listing;