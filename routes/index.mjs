import express from 'express'
import products from '../models/product.mjs' 
import payment from './payment.mjs'

const router=express.Router()

router.use('/products',products)
router.use('/payment',payment)

export default router; 