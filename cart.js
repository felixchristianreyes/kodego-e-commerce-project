const heartButton = document.querySelectorAll('.fa-heart');

let products = [
    {
        name:"Iced Latte",
        tag:"Iced Latte",
        price:125,
        inCart:0
    },
    {
        name:"Iced Mocha",
        tag:"Iced Mocha",
        price:150,
        inCart:0 
    },
    {
        name:"Iced Americano",
        tag:"Iced Americano",
        price:100,
        inCart:0
    },
    {
        name:"Iced Orange Espresso",
        tag:"Iced Orange Espresso",
        price:150,
        inCart:0
    },
    {
        name:"Iced Cappuccino",
        tag:"Iced Cappuccino",
        price:150,
        inCart:0
    },
    {
        name:"Iced Macha Green Tea",
        tag:"Iced Macha Green Tea",
        price:200,
        inCart:0
    }
]

for(let i = 0; i < heartButton.length; i++){
    heartButton[i].addEventListener('click' , () =>{
        cartNumbers(products[i])
        totalCost(products[i])
    })
}

const onLoading = () => {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers){
        document.querySelector('.bagSpan').textContent = productNumbers
    }
}

const cartNumbers = (products) =>{
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers)
    if(productNumbers){
        localStorage.setItem('cartNumbers' ,productNumbers + 1)
        document.querySelector('.bagSpan').textContent = productNumbers + 1
    }else{
        localStorage.setItem('cartNumbers' , 1)
        document.querySelector('.bagSpan').textContent = 1
    }
   setItems(products)
}
const setItems = (products) =>{
    let cartItems = localStorage.getItem("productIncart")
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){   
        if(cartItems[products.tag] == undefined){
            cartItems ={
               ...cartItems,
               [products.tag]:products 
            }
        }
        cartItems[products.tag].inCart += 1
    }else{
        products.inCart = 1
        cartItems = {
            [products.tag]:products
        }
    
    }
  
   
    localStorage.setItem("productIncart" , JSON.stringify
    (cartItems))
}
const totalCost = (products) => {
   
    let cartCost = localStorage.getItem('totalCost')
  
    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost' , cartCost + products.price)
    }else{
        localStorage.setItem('totalCost', products.price)
    }
}

const displayCart = () => {
    let cartItems = localStorage.getItem('productIncart')
    cartItems = JSON.parse(cartItems)

    console.log(cartItems)
}
onLoading()