const Register = require("../../models/register");
const bcrypt = require('bcryptjs');
let log = true;
const authController = () =>
{
    return {
        login : (req,res) =>
        {
                 res.render("auth/login");
        },

        register : (req,res) =>
        {
                 res.render("auth/register");
        },
        async registration(req,res)
        {   
        try{
            // console.log("Working");
            const {name,email,password} = req.body
            // console.log(req.body);

            const registerData =new Register(
                {
                    name : req.body.name,
                    email : req.body.email,
                    password : req.body.password
                }
            )
            // console.log("Working 2nd");
            const saveRegistration = await registerData.save();
            // console.log("Working 3rd");
            // console.log(saveRegistration);
            res.redirect("/login")
        }catch(e)
        {
            console.log("the error is : " + e);
            res.redirect("/register");
        }
        },
        async loginCheck(req,res)
        {   
            try{
                const {email, password} = req.body
                const getData = await Register.findOne({email});
                // const isMatch = await bcrypt.compare(password,getData.password);
                // console.log(isMatch);
                if(!getData)
                {                       
                    console.log("Invalid Credentials");
                    res.redirect('/login');
                }
                else
                {   
                    const isMatch = await bcrypt.compare(password,getData.password);
                    if(!isMatch)
                    {  
                        console.log("Invalid Credentials");
                        res.redirect('/login');
                    }
                    else
                    {
                        // console.log("Success");
                        // log = true;
                        res.redirect('/');
                        // console.log(getData.password);
                        // console.log(password);
                    }
                }
            }
            catch(e)
            {
                console.log(e)
            }
        }
    }
}

module.exports = authController;