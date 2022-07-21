// Create a HTML File and link it with a script.js file as well as a style.css file

// Establish the variables you're going to use with DOM Manipulation

var startButton = document.getElementById("startButton")
var questionTitle = document.getElementById("title")
var choiceContainer = document.getElementById("options")
var timerEl = document.getElementById('timerValue');
var score = 0;

var result = {
    correct: "Correct!",
    incorrect: "Wrong!",
}

var questionIndex = 0

// create an array of questions including the right answer to those questions


var quizQuestions = [ 
    {
        question:"What does i++ do?",
        answer: "it increments the value of a variable by one",
        multipleChoices: ["it creates igloos", "it increments the value of a variable by one" ,"it increments the value of a variable by two ", "it increments the value of a variable by three"],
    },

    {
        question:"What are the three types of variable declarations?",
        answer: "var, let, const",
        multipleChoices: ["var, let, const", "boolean, string, null" ,"null, number, var", "var, null, boolean"],
    },

    {
        question:"Which method do you use to document the id of an element?",
        answer: "getElementById",
        multipleChoices: ["setInterval", "createElement" ,"append", "getElementById"],
    },

    {
        question:"Which built in object produces a value of truth or false?",
        answer: "Boolean",
        multipleChoices: ["String", "Boolean" ,"Null", "Number"],
    },

    {
        question:"What can you use to lead JavaScript to produce changes within HTML?",
        answer: "DOM Manipulation",
        multipleChoices: ["DOM Manipulation", "Google Map API" ,"Target Manipulation", "Weather API"],
    },

    {
        question:"What is true about functions?",
        answer: "You can't place a function within a function",
        multipleChoices: ["Functions are soley used in HTML", "Functions are primarily produced in CSS" ,"functions can produce up to four addtional functions within itself ", "You can't place a function within a function"],
    },

    {
        question:"What does i stand for within a for loop?",
        answer: "index",
        multipleChoices: ["interaction", "indestructible" ,"index", "istant"],
    },

]

console.log(quizQuestions)


//Create Start Button

let btn = document.createElement("button");

btn.textContent="Start Quiz";

btn.onclick = start

startButton.append(btn)


// User Input

let userAnswer = '';


// This is what happens when you click start


// function start () {

//     countdown();


//     for (questionIndex = 0; questionIndex < quizQuestions.length; questionIndex++) {

//         let currentQuestion = quizQuestions[questionIndex];
//         questionTitle.textContent = currentQuestion.question;
//         choiceContainer.innerHTML = " ";

//         for (let index = 0; index <currentQuestion.multipleChoices.length; index++) {
//             let choiceOption = currentQuestion.multipleChoices[index];
//             // let btnList = document.createElement("li");
//             let btns = document.createElement("button");
//             btns.textContent = currentQuestion.multipleChoices[index];
//             btns.setAttribute('value', currentQuestion.multipleChoices[index]);        
    
//             choiceContainer.append(btns);
    
//             // console.log('*****', btns.getAttribute('value'))
//         }
//         choiceContainer.addEventListener('click', checkAnswer, false);    
//         console.log("question ", questionIndex, ": ", currentQuestion);
//     }

// }

function start () {
   
    startButton.innerHTML = ""
    document.getElementById("Welcome").innerHTML = ""
    countdown();
    questionDisplay();

}

const questionDisplay = () => {
    let currentQuestion = quizQuestions[questionIndex];
    console.log(currentQuestion);
    questionTitle.textContent = currentQuestion.question;
    choiceContainer.innerHTML = ""
    currentQuestion.multipleChoices.forEach(currentQuestion => {
        console.log("should be first question", currentQuestion);

        let questionPrompt = document.createElement('button');
        questionPrompt.textContent = currentQuestion;
        questionPrompt.setAttribute('value', currentQuestion);
        choiceContainer.append(questionPrompt);

        choiceContainer.addEventListener('click', checkAnswer,);

        
        console.log("question ", questionIndex, ": ", currentQuestion);        
    });
}

function checkAnswer(selection) {
   // This function checks to see if the answers are correct. 
    // It documents an additional point everytime a question is correct.
    console.log(selection.target.value)
    if (selection.target.value == quizQuestions[questionIndex].answer){ 
        score++; 
        document.getElementById("result").innerHTML = result.correct;    
        questionIndex++;       
        questionDisplay();
        return;   
    } else {        
        document.getElementById("result").innerHTML = result.incorrect;    
        question++;
        questionDisplay();     
        return;
    }
}


function countdown() {
    var timeLeft = 90;
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
        } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
        } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        // displayMessage();
        }
    }, 1000);
    }



