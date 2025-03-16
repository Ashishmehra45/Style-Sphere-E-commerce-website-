const mongoose = require('mongoose')



const adminmodel = mongoose.Schema({
 name:{
   typeof: String,
   trim:true,
   minlegth:3
},
    email:String,
    pasword:String,
    
    pic:String,
    gstin:String
})

 module.exports = mongoose.model('user' ,adminmodel)