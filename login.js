const form = document.getElementById('form');
const button = document.querySelector('.btn');
const inputName = document.querySelector('.name');
const inputPass = document.querySelector('.password');
const inputEmail = document.querySelector('.email');
const inputNameContainer = document.querySelector('.nameContainer');
const inputPassConatainer = document.querySelector('.paswordContainer');
const input = document.querySelectorAll('.input')


const isEmpty = () =>{
    var email = "ruzell@gmail.com"
    var password = "ruzell"

    if( inputPass.value && inputEmail.value ){
        button.removeAttribute("disabled")
        button.addEventListener('click' , () =>{
            if( inputPass.value === password && inputEmail.value === email){
                window.location.href = "homepage.html"
            }
            else{
                inputNameContainer.innerHTML = "Incorrect Email or password"
              
            } 
        })
    }
    else{
        button.disabled = true
    }

}
form.addEventListener('submit' , (e) =>{
    e.preventDefault()
})