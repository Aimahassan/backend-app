import express from "express";
import products from "../models/product.mjs";

const router=express.Router()

router.get('/',async(req,res)=>{
    const allProducts=await products.find()
    res.send({message:'Data Fethch Successfully',Data:allProducts})

})

router.get('/:id',async(req,res)=>{
    try{
        const singleProduct=await products.findById(req.params.id)
    }
    catch(e){
        res.status(500).send({message:e.message})

}
})

router.post('/post',async(req,res)=>{
    try{
        const postProduct=new products(req.body)
        await products.save() 
        res.send({ message: 'Ad posted successfully' })
    }
    catch(e){
        res.status(500).send({message:e.message})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const updateProduct=await products.findByIdAndUpdate({_id:req.params.id},req.body,
            {new:true}
        )
        res.send({message:'Product Updated Successfully',Data:updateProduct})
    }
    catch(e){
        res.status(500).send({message:e.message})
        }
})

router.delete('/:id',async(req,res)=>{
    try{
        const updateProduct=await products.findByIdAndDelete({_id:req.params.id},req.body,
            {new:true}
        )
        res.send({message:'Product Updated Successfully',Data:updateProduct})
    }
    catch(e){
        res.status(500).send({message:e.message})
        }
})

export default router
// put data update karta ha

