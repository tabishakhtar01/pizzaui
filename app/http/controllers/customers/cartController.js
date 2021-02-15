function cartController()
{
    return {
        cart : (req,res) =>
        {
                 res.render("customer/cart");
        }
        // ,
        // update :(req, res) =>
        // {
        //     return res.json({data : "Hii"} );
        // }
    }
}

module.exports = cartController;