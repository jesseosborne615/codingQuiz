

const questions = [
    {
        question: "Which of the following is a correct example of camel case?",
        optionA: "This is camel case",
        optionB: "ThisIsCamelCase",
        optionC: "This.Is.Camel.Case",
        optionD: "thisIsCamelCase",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is NOT one of the four cornerstones of computational thinking?",
        optionA: "Decomposition",
        optionB: "Hoping For The Best",
        optionC: "Pattern Recognition",
        optionD: "Abstraction",
        correctOption: "optionB"
    },

    {
        question: "What does HTML stand for?",
        optionA: "Hypertext Markdown Language",
        optionB: "Hello There My Love",
        optionC: "Cascading Style Sheet",
        optionD: "Hypertext Markup Language",
        correctOption: "optionD"
    },

    {
        question: "Arrays always start at what?",
        optionA: "0",
        optionB: "1",
        optionC: "100",
        optionD: "555",
        correctOption: "optionA"
    },

    {
        question: "In JS, which of the following compares equality AND types?",
        optionA: "===",
        optionB: "=",
        optionC: "==",
        optionD: ":)",
        correctOption: "optionA"
    },

    {
        question: "What does CSS stand for?",
        optionA: "Cascading Style Setup",
        optionB: "Canadian Secure Server",
        optionC: "Cascading Style Sheet",
        optionD: "Cool Styling Stuff",
        correctOption: "optionC"
    },

    {
        question: "What is the DOM?",
        optionA: "Document Object Model",
        optionB: "mySpace",
        optionC: "A github repo",
        optionD: "A mythical bird",
        correctOption: "optionA"
    },

    {
        question: "A child element is ____ inside of its parent element",
        optionA: "sometimes",
        optionB: "Googled",
        optionC: "not",
        optionD: "nested",
        correctOption: "optionD"
    },

    {
        question: "In JS, a method is a function that belongs to ___",
        optionA: "github",
        optionB: "UCF",
        optionC: "jQuery",
        optionD: "an object",
        correctOption: "optionD"
    },

    {
        question: "Where should a reset CSS source code be placed in relation to the CSS source code?",
        optionA: "Below",
        optionB: "East",
        optionC: "Above",
        optionD: "Placement Doesn't Matter",
        correctOption: "optionC"
    },

    

]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
   
        if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

   
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
           
            setTimeout(() => {
                questionNumber++
            }, 1000);
        }
       
        
    })
}




function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

     if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}