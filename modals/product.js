const mongoose=require('mongoose');
const timestamps =require('mongoose-timestamp');

const ProductSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    },
})


ProductSchema.plugin(timestamps,{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
const Product= mongoose.model('Products', ProductSchema);


module.exports=Product;