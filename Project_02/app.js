const api_url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean&encode=url3986";

const question = document.querySelector("#question");
const answers = document.querySelector("#answers");
const btnNext = document.querySelector("#btnNext");
const scoreOutput = document.querySelector("#score");

let currentQuestion = {};
let score = 0;
let totalQuestions = 0; // keep track of total questionns

btnNext.addEventListener("click", getNextQuestion);

function fetchQuestionData(url) {
    // Return promise that wraps up the fetch call
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json()) // Parse data into JSON format
            .then(response => resolve(response)) // resolve data if successfully parsed into JOSN
            .catch(err => reject(err)) // reject with an error occured
    })
}

function getNextQuestion() {
    fetchQuestionData(api_url)
        .then(data => { // Takes parsed JSON data
            totalQuestions = data.results.length // Get total number of questions
            currentQuestion = data.results[0]; // Assign first question
            displayQuestion(currentQuestion);
        })
        .catch(error => console.log("Error fetching question: ", error))
}
    
function displayQuestion(questionData) {
    // clear previous question and answers
    question.innerHTML = "";
    answers.innerHTML = "";

    // decode the encoded question
    question.textContent = decodeURIComponent(questionData.question);

    // create true and false buttons
    const trueButton = document.createElement("button");
    trueButton.textContent = "True";
    trueButton.addEventListener("click", () => checkAnswers(true, questionData.correct_answer));
    answers.appendChild(trueButton); // display button in the HTML

    const falseButton = document.createElement("button");
    falseButton.textContent = "False";
    falseButton.addEventListener("click", () => checkAnswers(false, questionData.correct_answer));
    answers.appendChild(falseButton);
}


function checkAnswers(userAnswer, correctAnswer) {
    if ((userAnswer && correctAnswer === "True") || (!userAnswer && correctAnswer === "False")) {
        alert("Correct");
        score++ // increment the score
    } else {
        alert("Incorrect");
    }

    scoreOutput.textContent = `Score: ${score}/${totalQuestions}` // show current score
    setTimeout(getNextQuestion, 1000); // Get next question after 800 ms
}


