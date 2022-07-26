// Create a HTML File and link it with a script.js file as well as a style.css file

// Establish the variables you're going to use with DOM Manipulation

var startButton = document.getElementById("startButton")
var questionTitle = document.getElementById("title")
var choiceContainer = document.getElementById("options")
var timerEl = document.getElementById('timerValue');
var myScore = document.getElementById('showScore')
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
        answer: "functions can be placed within a function",
        multipleChoices: ["Functions are soley used in HTML", "Functions are primarily produced in CSS" ,"functions can produce up to four addtional functions within itself ", "functions can be placed within a function"],
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

// }

function start () {
   //We first remove the start button as well as the other local items on the screen
    startButton.innerHTML = ""
    document.getElementById("gameOver").innerHTML = ""
    document.getElementById("Welcome").innerHTML = ""
    //run the countdown function
    countdown();
    //run the display function
    questionDisplay();

}

const questionDisplay = () => {
    let currentQuestion = quizQuestions[questionIndex];
    console.log(currentQuestion);
    //creating the title
    questionTitle.textContent = currentQuestion.question;
    choiceContainer.innerHTML = ""
    currentQuestion.multipleChoices.forEach(currentQuestion => {
        console.log("should be first question", currentQuestion);
        // creating the buttons
        let questionPrompt = document.createElement('button');
        questionPrompt.textContent = currentQuestion;
        questionPrompt.setAttribute('value', currentQuestion);
        // styling the buttons
        questionPrompt.style.fontSize = 'medium'
        questionPrompt.style.fontFamily = 'gill sans'
        questionPrompt.style.borderRadius = '8px'
        //appending the buttons
        choiceContainer.append(questionPrompt);
        //making the buttons clickable
        choiceContainer.addEventListener('click', checkAnswer,);

        
        console.log("question ", questionIndex, ": ", currentQuestion);    
        

    });
}
//Our checkAnswer function tallies the points and reveals the notion of correct and incorrect
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
        questionIndex++;
        questionDisplay();     
        return;
    }
}
//this is the function that's ran in all the ways the game can end
function endGame () { 

    questionTitle.innerHTML = ""
    choiceContainer.innerHTML = ""
    document.getElementById("gameOver").innerHTML = "Game Over...try again?"

    let btn = document.createElement("button");
    btn.textContent="Start Quiz";
    btn.onclick = start 
    startButton.append(btn)
    myScore.textContent = 'Your Final Score Is  ' + score


   
}

//this countdown is the timer
function countdown() {
    var timeLeft = 60;
    
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
        endGame ();
        // Call the `displayMessage()` function
        // displayMessage();
        }
    }, 1000);
    }



