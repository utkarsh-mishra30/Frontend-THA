let buttons = document.querySelectorAll("button")
let screen = document.querySelector(".screen")
let expression = ""

function onClick(event) {
    let key = event.target.textContent
    if (expression === "Infinity") {
        expression = ""
    }
    switch (key) {
        case "C":
            expression = expression.substring(0, expression.length - 1)
            break;
        case "AC":
            expression = ""
            break;
        case "=":

            expression = "" + eval(expression)
            break;
        default:
            expression += key


    }
    screen.textContent = expression
}

function addClick(element) {
    element.addEventListener('click', onClick)
}

buttons.forEach(addClick)