let carts =document.querySelectorAll(".add-cart");

let products = [
    {
        name:"Professor Swag Combo",
        tag:"Non Veg",
        price:599,
        inCart:0

    },
    {
        name:"Professor Swag Combo-2",
        tag:"Non Veg",
        price:500,
        inCart:0

    },
    {
        name:"Professor Swag Combo-3",
        tag:"Non Veg",
        price:499,
        inCart:0,

    },
    {
        name:"Professor Swag Combo-4",
        tag:"Non Veg",
        price:399,
        inCart:0

    }
]

for(let i = 0; i < carts.length;i++){
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i])
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector(".car img").textContent = productNumbers
    }
}

function cartNumbers(products) {
    console.log("The product is", products);
    let productNumbers = localStorage.getItem("cartNumbers");
    
    productNumbers=parseInt(productNumbers)

    if(productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".sign-tab-1 img").textContent = productNumbers + 1;

    }
    else {
        localStorage.setItem("cartNumbers", 1)
        document.querySelector(".car img").textContent = 1;
    }
   setItems(products);

   function setItems(product){
  let cartItems=localStorage.getItem("productsInCart")
  cartItems = JSON.parse(cartItems)
  

  if(cartItems != null) {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]:products
            }
        }
        cartItems[products.tag].inCart += 1
  } else {
   products.inCart = 1;
     cartItems = {
        [products.tag]:products
    }
}
  

   localStorage.setItem("productsInCart", JSON.stringify(cartItems))
   }
    


}
function totalCost(products) {
    //console.log("product price are", products.price);
    let cartCost = localStorage.getItem("totalCost")
   
    

    if(cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + products.price)
    } else {
        localStorage.setItem("totalCost",products.price)
    }

  
    }
  
  



onLoadCartNumbers()
