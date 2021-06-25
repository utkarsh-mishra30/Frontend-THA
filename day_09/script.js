let seats = document.querySelectorAll('.seat')
let booked = 0
let remaining = 124
    //console.log(seat)

for (let seat of seats) {
    seat.addEventListener('click', function() {
        //console.log('clicked')
        if (this.classList.contains('color')) {
            document.getElementById('booked').innerHTML = --booked
            document.getElementById('remaining').innerHTML = ++remaining

        } else {
            document.getElementById('booked').innerHTML = ++booked
            document.getElementById('remaining').innerHTML = --remaining
        }


        this.classList.toggle('color')
    })
}


































// function onClick(event) {

//     let seat = event.target
//     seat.classList.toggle('color')

//     console.log(seat.classList)

//     // let color = seat.classList.contains('color')
//     // if (color) {
//     //     booked += 1
//     //     remaining = 124 - booked
//     // } else {
//     //     booked -= 1
//     //     remaining = 124 - booked
//     // }

// }

// function addClick(element) {
//     element.onclick = onClick
// }

// seat.forEach(addClick)




// seat.addEventListener('click', () => {
//     if (box.classList.contains('color')) {
//         box.classList.remove('color')
//     } else {
//         box.classList.add('color')
//     }
// })