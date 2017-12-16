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
        newProduct.save((err)=>{
            handleCallback(res,err,{massage:"Added a product successfully!"});
        })
       
    })


route
    .get('/:product_id',(req,res,next)=>{
        let product_id=req.params.product_id;
        res.send(product_id);
    })
    

function handleCallback(res,err,data){
    if(err)  return res.json({success:false,msg:err.message});
    res.json({success:true,data});
}

module.exports=route;