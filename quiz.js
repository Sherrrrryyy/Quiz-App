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

    for (var key in questions[indexNum].options) {
        // console.log(questions[indexNum].options[key])
        var mulOption = questions[indexNum].options[key]
        options.innerHTML += `<li>${mulOption}</li>`
    }


}

function nextQuest() {
    if (indexNum < questions.length - 1) {
        indexNum++
        static.innerHTML++
        startQuiz()

    }

}