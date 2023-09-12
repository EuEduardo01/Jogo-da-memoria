// adicionar evento de click nas cartas
let cartas = document.querySelectorAll(".memory-card")
for (const cards of cartas){
    cards.addEventListener("click", flipCard)
}
let locked = false
let primaryCard,secondCard;
let hasFlippedCard = false

// Vira as cartas 
function flipCard() {
    if(locked)return

    this.classList.add("flip")
    if(!hasFlippedCard){
        primaryCard = this
        hasFlippedCard = true
        return
    }

    if(this === primaryCard)return

    secondCard = this
    hasFlippedCard = false

    console.log(this)
    winner()
}
// Checando os pares e desvirando as cartas diferentes
const winner = ()=>{
    if(primaryCard.dataset.framework === secondCard.dataset.framework){
        primaryCard.removeEventListener("click", flipCard)
        secondCard.removeEventListener("click", flipCard)
        return
    }
    locked = true

    setTimeout(flipedOff, 1200)
}
// Função de desvirar as cartas 
const flipedOff = ()=>{
    primaryCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    locked = false
}
// Embaralhando as cartas
const mix = (()=>{
    for(const cards of cartas){
       const random = Math.floor(Math.random()*12) 
       cards.style.order = random
    }
})()



