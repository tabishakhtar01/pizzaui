
var count = 0;
const addtocart = document.querySelectorAll(".add-to-cart");
addtocart.forEach((btn)=>
{         

    btn.addEventListener('click',(e)=>
    {   
        const pizza = 
        {
            _id :  btn.dataset._id,
            name : btn.dataset.name,
            image : btn.dataset.image,
            price : btn.dataset.price,
            size : btn.dataset.size
        }
        count=count + 1;
        document.getElementById("count").innerText = count;
        // console.log(count);
        // console.log(pizza);
    })
});