const questions = [
    'What is the capital of France?',
    'Who wrote the play "Romeo and Juliet"?',
    'What is the largest planet in our solar system?',
    'Which element has the chemical symbol "O"?',
    'In which year did the Titanic sink?',
    'Who painted the Mona Lisa?',
    'What is the square root of 144?',
    'Which continent is known as the "Land Down Under"?',
    'What is the longest river in the world?',
    'Who developed the theory of relativity?',
    'Which animal is known as the "King of the Jungle"?',
    'What is the currency of Japan?',
    'How many sides does a hexagon have?',
    'What is the tallest mountain in the world?',
    'Who discovered penicillin?',
    'Which planet is known as the "Red Planet"?',
    'What is the hardest natural substance on Earth?',
    'How many colors are there in a rainbow?',
    'Who was the first person to walk on the moon?',
    'Which ocean is the largest by surface area?'
];

const answers = [
    'Paris',
    'William Shakespeare',
    'Jupiter',
    'Oxygen',
    '1912',
    'Leonardo da Vinci',
    '12',
    'Australia',
    'Nile River',
    'Albert Einstein',
    'Lion',
    'Yen',
    '6',
    'Mount Everest',
    'Alexander Fleming',
    'Mars',
    'Diamond',
    '7',
    'Neil Armstrong',
    'Pacific Ocean'
];


const typedValueElement = document.getElementById('typed-value');
const Top = document.getElementById("score");
const Level = document.getElementById("level");
const quest = document.getElementById("quote");
const button = document.getElementById("start")
const message = document.getElementById("message");

let questionIndex = 0;


button.addEventListener("click", function() {
    console.log("Button was clicked!");
    
    let question = questions[questionIndex];
    quest.innerText = question;

    typedValueElement.value = '';
});

typedValueElement.addEventListener("input",  () => {
    let typedValue = typedValueElement.value.trim();
    if (typedValue.toLowerCase() == answers[questionIndex].toLowerCase()) {
        console.log("Correct!");
        questionIndex++;

        finalLevel = questionIndex
        console.log(finalLevel);
    

        let bestLevel = localStorage.getItem("bestLevel");
        bestLevel = bestLevel ? parseFloat(bestLevel) : 0;
        if (finalLevel > bestLevel) {
            localStorage.setItem('bestLevel', finalLevel);
        }
        Top.innerText = `Best Level: ${localStorage.getItem('bestLevel')} `;

        if (questionIndex < questions.length) {
            quest.innerText = questions[questionIndex]; // Show next question
            typedValueElement.value = ''; // Clear input field
        } else {
            console.log("Quiz Finished!");
            quest.innerText = "Congratulations! You've answered all questions.";
            typedValueElement.style.display = "none"; // Hide input box
        }
    }
});


