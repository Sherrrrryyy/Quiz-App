var form = document.getElementById("form")
var quizstart = document.getElementById("quizstart")

function startQuiz() {
    // console.log("Hello")
    var name = document.getElementById("name")
    var rollNo = document.getElementById("rollNo")
    var email = document.getElementById("email")
    var nameError = document.getElementById("nameError")
    var rollError = document.getElementById("rollError")
    var emailError = document.getElementById("emailError")

    if (!name.value) {
        nameError.className = "show"
        nameError.style.color = "red"
        return
    }
    if (!rollNo.value) {
        rollError.className = "show"
        rollError.style.color = "red"
        return
    }
    if (!email.value) {
        emailError.className = "show"
        emailError.style.color = "red"
        return
    }


    localStorage.setItem("name", name.value)
    localStorage.setItem("rollNo", rollNo.value)
    localStorage.setItem("email", email.value)
    form.className = "hide"
    quizstart.className = "show"

}


