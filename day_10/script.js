const cards = document.querySelectorAll('.card')

let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false

function flipcard() {
    if (lockBoard) return
    if (this === firstCard) return

    this.classList.toggle('flip')

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true
        firstCard = this
    } else {
        //second click
        hasFlippedCard = false
        secondCard = this

        checkForMatch()

    }
}

function checkForMatch() {
    //do cards match?
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        //it is a match
        disabledCards()
    } else {
        //not a match
        unflipCards()
    }
}

function disabledCards() {
    firstCard.removeEventListener('click', flipcard)
    secondCard.removeEventListener('click', flipcard)
    resetBoard()
}

function unflipCards() {
    lockBoard = true
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard()
    }, 1500)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20)
        card.style.order = randomPos
    })
})()

cards.forEach(card => card.addEventListener('click', flipcard));