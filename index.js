let cards = []
let sum = 0
let hasBlackjack = false
let message = ""
let isAlive = true

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*13)+1

    if(randomNumber>10)
    {
        return 10
    }
    else if(randomNumber==1)
    {
        return 1
    }
    else return randomNumber
}




function startGame()
{   
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards :" + cards.join(' ')


    sumEl.textContent = "Sum : "+ sum

if(sum>21)
{
    message ="you are out of game!"
    isAlive = false  
} else if(sum<21)  
{
    message = "do you want to draw a new card! "
    
}
else if(sum==21)
{
message= "wooh! You've got BlackJack!"
isAlive=true
}



messageEl.textContent = message
}

function newCard()
{
    if(isAlive==true && hasBlackjack == false)
    {
    
    let card = getRandomCard()
    cards.push(card)
    
    sum+=card
    renderGame()
    }


}
