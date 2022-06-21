const addToCart =  document.querySelectorAll(".fa-cart-arrow-down");
const modalContainer = document.getElementById('modalContainer')
const closeModal = document.querySelector('.closemodal');



for(let i = 0; i< addToCart.length; i++){
    addToCart[i].addEventListener('click' , ()=>{
        modalContainer.classList.add('show')

    })
}


const closemodal = () => {
    modalContainer.classList.remove('show')
}
    


