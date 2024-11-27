const question = [
    {question: "Who is the prime minister of USA?", 
        option: ["Carlos Merritt", "Kaden Meyers", "Joe Biden", "Kyleigh Stanton"], 
        answer: 2},

    {question: "Who was the best defender in Arsenal in the year 2021?", 
        option: ["William Saliba", "Kieran Tierney", "Martin Odegaard", "Gabriel Magalhaes"], 
        answer: 0},

    {question: "What should be be added in food to make it have taste?", 
        option: ["Seasoning", "Salt", "Pepper", "Onions"], 
        answer: 1},

    {question: "What is the full meaning of AI?", 
        option: ["Automatic Icon", "Artificial Intelligence", "Animal Intelligence", "Acquired Immune"], 
        answer: 1},

    {question: "Which University is the highest in Nigeria?", 
        option: ["Nnamdi Azikiwe University", "University of Ibadan", "Imo State University ", "Covenant University"], 
        answer: 3},

    {question: "Who was the uncle of Esther in the Bible?", 
        option: ["Haman", "Saul", "Mordeccai", "Absalom"], 
        answer: 1},

    {question: "what is the full meaning of LCM?", 
        option: ["Let Computer Manufacture", "List Content Material", "Low Common Man", "Least Common Multiple"], 
        answer: 3},

    {question: "Who is the best web developer of all time?", 
        option: ["Tim Berners-Lee", "Linus Torvalds", "Joel Ricch", "John Carmack"], 
        answer: 0},

    {question: "Which goddess was considered the mother of pharaoh?", 
        option: ["Duat", "Aaru", "Sphinx", "Isis"], 
        answer: 3},

    {question: "What is the washing away of the top soil?", 
        option: ["Soil erosion", "Deforesting", "Bush burning", "Pests"], 
        answer: 3},
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


function startTest() {
    document.getElementById("welcome-view").style.display = "none";
    document.getElementById("question-view").style.display = "block";
    loadQ();
}

function  loadQ() {
    const questionD = questions[currentQuestion];
    document.getElementById("question-text").innerText = questionD.question;
    const optionF = document.getElementById("options-form");
    optionF.innerHTML = "";
    
    questionD.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "option-label";

        const radioB = document.createElement("input");
        radioB.type = "radio";
        radioB.name = "option";
        radioB.value = index;
        radioB.onclick = () => selectAns(index);

        label.appendChild(radioB);
        label.append(option);
        optionF.appendChild(label);
    });

    document.getElementById("next-button").disabled = true;
    updateProgresorBar();
}

//moove to next question
function selectAns(index) {
    selectedAns = index;
    document.getElementById("next-button").disabled = false;//Enable Next
}

//move to next questionn or show results
function nextQuestion() {
    if(selectedAns === questions[currentQuestion].answer) {
        score++;
    }
}
currentQuestions++;
selectedAns = null;

if (currentQuestion < questiond.length) {
    loadQ();
}else {
    displayResult();
    document.getElementById("next-button").onclick = submitExam;
}
//submit the exam and dislay result
function submitExam(){
    displayResult();
    document.getElementById("next-button").disabled = true;
}

console.log(currentQuestion);
console.log(questions.length);
if (currentQuestion === questions.length - 1) {
    document.getElementById("next-button").innerText = "submit";
    document.getElementById("next-button").disabled = false;
}

//update progress bar
function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress-bar-fill").style.width = `${progress}%`;
}

//Display results
function displayResult(){
    document.getElementById("question-view").style.display = "none";
    document.getElementById("result-view").style.display = "block";

    const resultMessage = score >= 5
    ? "Bright student! Great job and keep it up!"
    : "poor result. Study harder and try again";
    document.getElementById("result-text").innerText = `Score: ${score}/10 - ${resultMessage}`;
}

//Restart exam
function restartExam(){
    const restart = ((currentQuestion - 1) / questions.length) * 100;
    document.getElementById("result-view").style.display = "none";
    document.getElementById("result-text").style.display = "block";
}












