const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require('bcryptjs');

const registerSchema = new mongoose.Schema(
    {
            name:
            {
                type:String,
                required:true,
            },
            email:
            {
                type:String,
                required:true,
                unique:true,
                validate(value)
                {
                    if(!validator.isEmail(value))
                    {
                        alert("Invalid Email Id");
                    }
                }
            },
            password:
            {
                type:String,
                required:true,
            } 
        }
)

registerSchema.pre('save',async function(next)
{   
    try{
        // console.log(`Password before Hashing: ${this.password}`)
        this.password = await bcrypt.hash(this.password,10);
    // console.log(`Password after Hashing: ${this.password}`)

    next();
    }catch(e)
    {
        console.log(e);
    }
    
})


const Register = new mongoose.model("Register",registerSchema);

module.exports = Register;