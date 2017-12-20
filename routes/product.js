const route=require('express').Router();
const Product=require('../modals/product');

// route.use('/',(req,res,next)=>{
    
// })
route
    .get('/',(req,res,next)=>{
        Product.find({},(err,results)=>{
            handleCallback(res,err,{products:results});
        })
    })
    .post('/',(req,res,next)=>{
        let newProduct=new Product(req.body);
        newProduct.save((err,result)=>{
            console.log(result);
            handleCallback(res,err,{product:result});
        })
       
    })


route
    .get('/:product_id',(req,res,next)=>{
        let product_id=req.params.product_id;
        res.send(product_id);
    })
    .delete('/:product_id',(req,res,next)=>{
        let product_id=req.params.product_id;
        Product.findByIdAndRemove({_id:product_id},(err)=>{
            handleCallback(res,err,{massage:"Removed a product successfully!"})
        })
    })
    .put('/:product_id',(req,res,next)=>{
        let product_id=req.params.product_id;
        Product.findByIdAndUpdate({_id:product_id},{ "$set": { "name": req.body.name, "price": req.body.price}},(err,result)=>{
            console.log(result);
            handleCallback(res,err,{product:result})
        })
    })
    

function handleCallback(res,err,data){
    if(err)  return res.json({success:false,massage:err.message});
    res.json({success:true,data});
}

module.exports=route;