const express=require('express')

const router=express.Router();

// controllers 
// we used register folder to store the callnack fun of middleware like register
import {register} from '../controllers/auth'

//  here '/register' is your end point
router.post("/register",register)

module.exports=router;

