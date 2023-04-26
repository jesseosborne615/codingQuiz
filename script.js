const questions = [
    {
        
        question: "What is an example of camel casing?",
        answer: "camelCasing",
        options: [
            "camelCasing",
            "camelcasing",
            "CamelCasing",
            "CAMELCASING"
        ]
    },
    {
        
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        options: [
            "Hypertext Markup Language",
            "Hello There My Love",
            "How To Make Languages",
            "Hyper turbo Markup Language"
        ]
    },
    {
        
        question: "MVC stands for...",
        answer: "model-view-controller",
        options: [
            "model-view-controller",
            "nothing",
            "monthly viewed CSS",
            "mongoDB view controller"
        ]
    },
];

const startbtn = document.querySelector("#start");
const intro = document.querySelector(".introContainer");
const questionContainer = document.querySelector(".questionContainer");
const question = document.querySelector("#quests");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
let currentIndex = 0;
let timer = 60;
let timerEl = document.querySelector(".timer");
const nextButton = document.querySelector(".next");

function startGame(){
    questionContainer.classList.remove('hide');
    intro.classList.add('hide');
    displayQuestions();
    startTimer()
}

startbtn.addEventListener('click', startGame);



function displayQuestions(){
    let currentQuestion = questions[currentIndex];
    let questionNumber = currentIndex + 1;
 
    
  

        quests.innerHTML = questions[currentIndex].question;
        console.log(questions.question);

        option1.innerHTML = questions[currentIndex].options[0];

        option2.innerHTML = questions[currentIndex].options[1];

        option3.innerHTML = questions[currentIndex].options[2];

        option4.innerHTML = questions[currentIndex].options[3];
        console.log(option1.innerHTML)

        var buttonChoices = document.querySelectorAll(".btn");
        for (var i = 0; i < buttonChoices.length; i++) {
            buttonChoices[i].addEventListener("click", validate);
        }

    
}

function validate(event){
    btn = event.target;
    if (btn.innerHTML ===questions[currentIndex].answer) {
        alert("Correct!");

        nextQuestion();
    } else {
        alert("Wrong!");
        timer = timer - 10;
        nextQuestion();
    }
}

function nextQuestion(){
  

    currentIndex++;
    if(currentIndex < questions.length){
        displayQuestions();
    } else gameover();
}

function gameover(){
    questionContainer.classList.add("hide");
    viewHighscores.classList.add("hide");
    resultsContainer.classList.remove("hide");
}

next.addEventListener("click", ()=>{
    nextQuestion();
    
    if(currentIndex < questions.length){
        nextQuestion();
    }
})



function startTimer(){
    timerEl.innerHTML = timer;
    console.log(timer);

    const timerInterval = setInterval(function(){
        timer--
        timerEl.innerHTML = timer;
        if (timer===0){
            clearInterval(timerInterval);
        }
    }, 1000)
}





//add validation
//get to next q&a