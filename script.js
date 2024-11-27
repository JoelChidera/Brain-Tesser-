const questions = [
    { question: "Who is the prime minister of USA?", 
      options: ["Carlos Merritt", "Kaden Meyers", "Joe Biden", "Kyleigh Stanton"], 
      answer: 2 },

    { question: "Who was the best defender in Arsenal in the year 2021?", 
      options: ["William Saliba", "Kieran Tierney", "Martin Odegaard", "Gabriel Magalhaes"], 
      answer: 0 },

    { question: "What should be added in food to make it have taste?", 
      options: ["Seasoning", "Salt", "Pepper", "Onions"], 
      answer: 1 },

    { question: "What is the full meaning of AI?", 
      options: ["Automatic Icon", "Artificial Intelligence", "Animal Intelligence", "Acquired Immune"], 
      answer: 1 },

    { question: "Which University is the highest in Nigeria?", 
      options: ["Nnamdi Azikiwe University", "University of Ibadan", "Imo State University", "Covenant University"], 
      answer: 3 },

    { question: "Who was the uncle of Esther in the Bible?", 
      options: ["Haman", "Saul", "Mordeccai", "Absalom"], 
      answer: 2 },

    { question: "What is the full meaning of LCM?", 
      options: ["Let Computer Manufacture", "List Content Material", "Low Common Man", "Least Common Multiple"], 
      answer: 3 },

    { question: "Who is the best web developer of all time?", 
      options: ["Tim Berners-Lee", "Linus Torvalds", "Joel Ricch", "John Carmack"], 
      answer: 0 },

    { question: "Which goddess was considered the mother of pharaoh?", 
      options: ["Duat", "Aaru", "Sphinx", "Isis"], 
      answer: 3 },

    { question: "What is the washing away of the top soil?", 
      options: ["Soil erosion", "Deforestation", "Bush burning", "Pests"], 
      answer: 0 },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function startTest() {
    document.getElementById("welcome-view").style.display = "none";
    document.getElementById("question-view").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    document.getElementById("question-text").innerText = currentQuestionData.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.innerText = `${String.fromCharCode(65 + index)}) ${option}`;
        button.onclick = () => selectAnswer(index, button);
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-button").innerText = currentQuestion === questions.length - 1 ? "Submit" : "Next";
    document.getElementById("previous-button").style.display = currentQuestion === 0 ? "none" : "inline-block";
    document.getElementById("next-button").disabled = selectedAnswer === null;

    updateProgressBar();
}

function selectAnswer(index, button) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));  // Remove previous selection

    button.classList.add('selected'); // Add 'selected' class to the clicked option
    selectedAnswer = index;
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    if (selectedAnswer !== null) {
        if (selectedAnswer === questions[currentQuestion].answer) {
            score++;
        }
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        selectedAnswer = null;
        loadQuestion();
    } else {
        submitExam();
    }
}

function previousQuestion() {
    currentQuestion--;
    selectedAnswer = null;
    loadQuestion();
}

function submitExam() {
    document.getElementById("question-view").style.display = "none";
    document.getElementById("result-view").style.display = "block";

    const resultMessage = score >= 6 ? "Congratulations! You passed the exam." : "You failed. Try again!";
    document.getElementById("result-text").innerText = `Your score: ${score} / 10\n${resultMessage}`;
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress-bar-fill").style.width = `${progress}%`;
}

function restartTest() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result-view").style.display = "none";
    document.getElementById("welcome-view").style.display = "block";
}















// fromCharCode() is used to create characters from their Unicode values.
//fromCharCode() works with Unicode code points that fit within the range of 0 to 65535. For code points beyond 65535, the method cannot handle them (those are in the supplementary planes of Unicode).
///For dealing with full Unicode code points, especially those beyond 65535, you may need to use String.fromCodePoint() instead, which can handle larger code points.
//The fromCharCode() method in JavaScript is a method used to convert Unicode values (or character codes) into characters. 
//It takes one or more integers, each representing a Unicode code point, and returns a string that corresponds to those code points.