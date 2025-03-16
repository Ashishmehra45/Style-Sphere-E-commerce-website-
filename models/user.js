

const usermodel = mongoose.Schema({
    name:{
        typeof: String,
        trim:true,
        minlegth:3
     },
    email:String,
    pasword:String,
    cart:Array,
    isadmin:Boolean,
    order:Array,
    contact:Number,
    pic:String
})

 module.exports = mongoose.model('user' ,usermodel)