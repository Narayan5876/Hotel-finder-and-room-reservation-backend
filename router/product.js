const express = require('express')
const Product = require('../models/product')
const router = new express.Router()


router.post("/product",(req,res)=>{
    //console.log(req.body)
   var myData = new Product(req.body);
   myData.save();
});
//get ko lagi code
router.get('/getProduct',function(req,res){
    Product.find().then(function(user_data){
        res.send(user_data);

    
}).catch(function(e){
    
            res.send(e)
        
    });
})
//yaha sama  get ko code 


//yaha bata taltira delete ko 
router.delete('/delProduct/:id',function(req,res){
    Product.findByIdAndDelete(req.params.id).then(function(){

    }).catch(function(){
        res.send(e)
    })

    
});

router.put('/updateProduct/:id',function(req,res){
    Product.findOneAndUpdate({_id :req.params.id},req.body).then(function(){
        res.send("updated")
    }).catch(function(e){
        res.send(e)
    })
})

module.exports = router