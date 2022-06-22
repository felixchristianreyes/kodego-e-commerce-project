var countTop = new Date().setHours(new Date().getHours() + 24)
localStorage.getItem(countTop)



let previousTime
setInterval((seconds , minutes , hours) =>{
var currentDate= new Date()


const timeBetween =   Math.ceil((countTop - currentDate) / 1000)
flipAllCard(timeBetween)

previousTime = timeBetween

},1000)


function flipAllCard(time){
    const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)


  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10)),
  flip(document.querySelector("[data-hours-ones]"), hours % 10),
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10)),
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10),
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10)),
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard , newNumber){
    const topS = flipCard.querySelector('.top')
    const startNumber = parseInt(topS.textContent)

    if(newNumber === startNumber) return

    const bottom = flipCard.querySelector('.bottom')
    const topFlip = document.createElement('div')
    topFlip.classList.add("top-flip")
    const bottomFlip = document.createElement('div')
    bottomFlip.classList.add("bottom-flip")

   
    
    topS.textContent = startNumber
    bottom.textContent = startNumber
    topFlip.textContent = startNumber
    bottomFlip.textContent = newNumber



    topFlip.addEventListener("animationstart", e => {
        topS.textContent = newNumber
      })
      topFlip.addEventListener("animationend", e => {
        topFlip.remove()
      })
      bottomFlip.addEventListener("animationend", e => {
        bottom.textContent = newNumber
        bottomFlip.remove()
      })
      flipCard.append(topFlip, bottomFlip)
    }

