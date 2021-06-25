let seat = document.querySelectorAll('.seat')
let booked = 0
let remaining = 124
    //console.log(seat)

function onClick(event) {

    let seat = event.target
    seat.classList.toggle('color')

    console.log(seat.classList)

    let color = seat.classList.contains('color')
    if (color) {
        booked += 1
        remaining = 124 - booked
    } else {
        booked -= 1
        remaining = 124 - booked
    }
    color.textContent = seat
}

function addClick(element) {
    element.onclick = onClick
}

seat.forEach(addClick)

// seat.addEventListener('click', () => {
//     if (box.classList.contains('color')) {
//         box.classList.remove('color')
//     } else {
//         box.classList.add('color')
//     }
// })