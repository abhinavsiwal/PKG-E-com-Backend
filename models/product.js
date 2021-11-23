const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:100,
    },
    price:{
        type:Number,
        required:true,
        maxlength:5,
        default:0,
    },
    description:{
        type:String,
        required:true,
    },
    ratings:{
        type:String,
        required:true,
        default:0,
    },
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        },
    ],
    category:{
        type:String,
        required:true,
        enum:{
            values:[
                "Vegetables",
                "Grocery",
                "Snacks and Drinks",
                "Fruits",
                "Personal Care",
                "Cleaning",
                "Home and Kitchen",
                "Fashion",
                "Sports",
                "Appliances",
                "Dairy and Frozen",
                "Clothes",
                "Shoes",
                "Beauty",
                "Health",
                "Outdoor",
                "Stationary",
            ],
            message:"Please select correct category for product",
        }
    },
    seller:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
        maxlength:5,
        default:0,
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[{
        name:{
          type: String,
          required: true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model("Product",productSchema);