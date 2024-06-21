// console.log("Hello world")

var questions = [
    {
        id: 1,
        question: "What is the correct syntax to create a function in JavaScript?",
        options: {
            a: "          function myFunction[] {}",
            b: "function:myFunction() {}",
            c: "function myFunction() {}",
            d: "create function myFunction() {}"

        },
        answer: "function myFunction() {}"
    },
    {
        id: 2,
        question: "Which of the following is the correct way to write a JavaScript array?",
        options: {
            a: 'var colors = "red", "green", "blue"',
            b: 'var colors = ["red", "green", "blue"]',
            c: 'var colors = (1: "red", 2: "green", 3: "blue")',
            d: 'var colors = "red"; "green"; "blue"'

        },
        answer: 'var colors = ["red", "green", "blue"]'
    },
    {
        id: 3,
        question: "How do you add a comment in JavaScript?",
        options: {
            a: 'This is a comment ',
            b: '// This is a comment',
            c: '-- This is a comment',
            d: '** This is a comment'
        },
        answer: '// This is a comment'
    }
    ,
    {
        id: 4,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: {
            a: "onmouseover",
            b: "onchange",
            c: "onmouseclick",
            d: "onclick"

        },
        answer: "onclick"
    }
    ,
    {
        id: 5,
        question: "How many prayers in a day:",
        options: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        id: 6,
        question: "How many total surah in quran",
        options: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        id: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        options: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]




var firstname = document.getElementById("firstname")
var secrollNo = document.getElementById("secrollNo")
var thiemail = document.getElementById("thiemail")

firstname.innerHTML = localStorage.getItem("name")
secrollNo.innerHTML = localStorage.getItem("rollNo")
thiemail.innerHTML = localStorage.getItem("email")

var Question = document.getElementById("Question")
var options = document.getElementById("options")
indexNum = 0


var static = document.getElementById("static")
var dynamic = document.getElementById("dynamic")
dynamic.innerHTML = questions.length




function startQuiz() {

    // console.log("Startquiz")
    Question.innerHTML = questions[indexNum].question
    options.innerHTML = ""
    var lastClick = document.getElementById('lastClick')
    lastClick.disabled = "none"
    var sumbitBtn = document.getElementById("sumbitBtn")
    sumbitBtn.disabled = "none"
    for (var key in questions[indexNum].options) {
        // console.log(questions[indexNum].options[key])
        var mulOption = questions[indexNum].options[key]
        options.innerHTML += `<li onclick="answerCheck(this)">${mulOption}</li>`
    }

}

function nextQuest() {


    if (indexNum < questions.length - 1) {
        indexNum++
        static.innerHTML++
        startQuiz()
    }

    var sumbitBtn = document.getElementById("sumbitBtn")
    var lastClick = document.getElementById("lastClick")
    if (indexNum === 6) {
        sumbitBtn.className = "show"
        lastClick.className = "hide"
    } else {
        sumbitBtn.className = "hide"
        lastClick.className = "show"
    }

}

rightAnswersCount = 0
wrongAnswersCount = 0

function answerCheck(ele) {

    var listOption = options.getElementsByTagName("li")
    var checkAns = ele.innerHTML === questions[indexNum].answer
    var lastClick = document.getElementById('lastClick')
    lastClick.disabled = ""
    var sumbitBtn = document.getElementById("sumbitBtn")
    sumbitBtn.disabled = ""
    var rightAnswers = document.getElementById('rightAnswers')
    var wrongAnswers = document.getElementById('wrongAnswers')
    if (checkAns) {
        ele.className = "right"
        rightAnswersCount++
        rightAnswers.innerHTML = rightAnswersCount
    } else {
        ele.className = "wrong"
        wrongAnswersCount++
        wrongAnswers.innerHTML = wrongAnswersCount
    }

    for (var li of listOption) {
        if (li.innerHTML === questions[indexNum].answer) {
            li.className = "right"
        }
    }
    for (var li of listOption) {
        li.style.cursor = "pointer"
    }
}


function showResult() {
    var result = document.getElementById("result")
    result.className = "show"
    sumbitBtn.className = "hide"

    var hideQuiz = document.getElementById('hideQuiz')
    hideQuiz.className = "hide"
    // console.log(hideQuiz)
}

let minutes = 1;
let seconds = 0;

function startTimer() {
    var timerInterval = setInterval(function () {
        seconds--
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }
        if (minutes < 0) {
        
            clearInterval(timerInterval);
        
        }
        document.getElementById("min").innerHTML = minutes + ":"
        document.getElementById("sec").innerHTML = seconds
    }, 1000);
}

startTimer();