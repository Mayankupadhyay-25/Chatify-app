import User from "../models/User.js";
import bcrypt from "bcryptjs"

export const signup = async (req,res) => {
     const {fullName, email, password} = req.body


     try{ 
          if(!fullName || !email || ! password) {
               return res.status(400).json({message: "all field are required"});
          }

          if (password.length < 6){
               return res.status(400).json({message: "password must be at least 6 characters"});
          }

          //check if email is valid : regex
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
               return res.status(400).json({message: "please provide a valid email Formet"});
          }
          const user = await User.findOne({email:email})
          if(user) return res.ststus(400).json({message: "user already exists"} )
     }catch(error){
        
     } 
}