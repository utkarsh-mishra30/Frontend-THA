let checks = document.querySelectorAll(".center div")
console.log(checks)

function onClick(event) {

    let check = event.target
    check.classList.toggle('color')

    console.log(check.classList)
}

function addClick(element) {
    element.onclick = onClick
}


checks.forEach(addClick)