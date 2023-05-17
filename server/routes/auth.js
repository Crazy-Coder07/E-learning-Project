const express=require('express')

const router=express.Router();

// controllers 
// we used register folder to store the callnack fun of middleware like register
import {register,login} from '../controllers/auth'

//  here '/register' is your end point
router.post("/register",register)
router.post("/login",login)


module.exports=router;

