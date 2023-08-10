const mongoose = require("mongoose");
const joi = require("@hapi/joi")

const bannerschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        requiured:true,
    },
    desktopImage:{
        type:String,
        required:true,
    },
    mobileImage:{
        type:String,
        required:true,
    },
    created: {
        type: Date,
        default: Date.now
      }
});

const reqSchema = joi.object({
    name: joi.string().required(),
    link: joi.string().uri(),
    status: joi.string(),
    desktopImage: joi.string(),
    mobileImage: joi.string(),
})


const Banner = mongoose.model("Banner",bannerschema);

module.exports={
    Banner,
    reqSchema,
}