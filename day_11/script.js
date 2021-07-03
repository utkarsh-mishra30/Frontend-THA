const quizDB = [{
        question: "Q1.  Who is the first Prime Minister of India?",
        a: "A.P.J. Abdul Kalaam",
        b: "Jawaharlal Nehru",
        c: "Indira Gandhi",
        d: "Narendra Modi",
        ans: "ans2"
    },
    {
        question: "Q2.  Who found the concept of “Gravitation” for the first time?",
        a: "Albert Einstein",
        b: "Charles Darwin",
        c: "Issac Newton",
        d: "V. Raman",
        ans: "ans3"
    },
    {
        question: "Q3.  What is the “Fear of Darkness” called?",
        a: "Nyctophobia",
        b: "Ablutophobia",
        c: "Ophidiophobia",
        d: "Arachnophobia",
        ans: "ans1"
    },
    {
        question: "Q4.  How many states are there in India?",
        a: "27",
        b: "28",
        c: "29",
        d: "30",
        ans: "ans3"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore')

let questionCount = 0
let score = 0

const loadQuestion = () => {
    // question.innerHTML = quizDB[questionCount].question
    const questionList = quizDB[questionCount]

    question.innerText = questionList.question

    option1.innerText = questionList.a
    option2.innerText = questionList.b
    option3.innerText = questionList.c
    option4.innerText = questionList.d


}

loadQuestion()

const getCheckAnswer = () => {
    let answer

    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id
        }

    })
    return answer
}


const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false)
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer()
    console.log(checkedAnswer)

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++
    }

    questionCount++

    deselectAll()

    if (questionCount < quizDB.length) {
        loadQuestion()
    } else {
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length}  </h3>
            <button class="btn" onclick="location.reload()">Play again </button>
        `;

        showScore.classList.remove('.scoreArea')
    }
})