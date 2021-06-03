const startButton = document.getElementById('start-it');
const nextButton = document.getElementById('nxt-it');
const questionContainerEl = document.getElementById('ques-cont');
const questionEl = document.getElementById('ques');
const answerEl = document.getElementById('answ-btn');

let shuffledQues, quesIndexData;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    quesIndexData++;
    setTheNext();
})

function startGame() {
  startButton.classList.add('hide');
  shuffledQues = question.sort(() => Math.random() - .5);
  quesIndexData = 0;
  questionContainerEl.classList.remove('hide');
  setTheNext();
}

function setTheNext() {
    resetSate();
    showQuestion(shuffledQues[quesIndexData])
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerEl.appendChild(button);
    });
}

function resetSate() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
}

function selectAnswer(i) {
    const selectedBtn = i.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if(shuffledQues.length > quesIndexData + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const question = [
    {
        question: "How much of the universe is in a plasma state (in percentage)?",
        answer: [{
            text: "50", correct: false
        }, {
            text: "99", correct: true
        }, {
            text: "75", correct: false
        }, {
            text: "25", correct: false
        } ]
    }, {
        question: "On what planet is the Great Red Spot?",
        answer: [{
            text: "Mars", correct: false
        }, {
            text: "Venus", correct: false
        }, {
            text: "Earth", correct: false
        }, {
            text: "Jupiter", correct: true
        } ]
    }, {
        question: "What is the most volcanically active body in our solar system?",
        answer: [{
            text: "a moon", correct: true
        }, {
            text: "an asteroid", correct: false
        }, {
            text: "a planet", correct: false
        }, {
            text: "a meteor", correct: false
        } ]
    }, {
        question: "What science does not deal with space?",
        answer: [{
            text: "astrophysics", correct: false
        }, {
            text: "entomology", correct: true
        }, {
            text: "cosmology", correct: false
        }, {
            text: "astronomy", correct: false
        } ]
    }, {
        question: "How many comets are there in the solar system?",
        answer: [{
            text: "1 million", correct: false
        }, {
            text: "1 trillion", correct: true
        }, {
            text: "100000", correct: false
        }, {
            text: "1 billion", correct: false
        } ]
    }, {
        question: "What is the name for a space without air, gas, or other matter?",
        answer: [{
            text: "vaccine", correct: false
        }, {
            text: "vacuum", correct: true
        }, {
            text: "vacuity", correct: false
        }, {
            text: "vacillation", correct: false
        } ]
    }
]