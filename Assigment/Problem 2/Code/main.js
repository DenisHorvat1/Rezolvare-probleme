let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', startQuiz);

function startQuiz() {
    shuffleQuestions();
    showQuestion();
}

//Shuffle the questions in other order
function shuffleQuestions() {
    for (let i = 0; i < questionsPool.length - 1; i++) {
        const j = Math.floor(Math.random() * questionsPool.length);
        [questionsPool[i], questionsPool[j]] = [questionsPool[j], questionsPool[i]];
    }
}

function showQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');

    // Display  current question
    questionContainer.textContent = `${currentQuestionIndex + 1}. ${questionsPool[currentQuestionIndex].question}`;

    // Display the options
    optionsContainer.innerHTML = "";
    questionsPool[currentQuestionIndex].choices.forEach((choice, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = choice;
        optionButton.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questionsPool[currentQuestionIndex].correctAnswer) {
        score++;
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if the quiz is over
    if (currentQuestionIndex === questionsPool.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

//Show the score
function endQuiz() {
    const scoreElement = document.getElementById('score');
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');

    scoreElement.textContent = `Score: ${score} / ${currentQuestionIndex}`;
    optionsContainer.textContent = "";

    questionContainer.innerHTML = "";
 
}


// 50 questions
const questionsPool = [
    {
        id: 1,
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2", "CH4"],
        correctAnswer: 0
    },
    {
        id: 2,
        question: "Who was the first President of the United States?",
        choices: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        correctAnswer: 2
    },
    {
        id: 3,
        question: "What is the result of 5 multiplied by 8?",
        choices: ["40", "48", "56", "64"],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Venus"],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "In which year did World War II end?",
        choices: ["1943", "1945", "1950", "1939"],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "What is the square root of 121?",
        choices: ["11", "12", "10", "13"],
        correctAnswer: 0
    },
    {
        id: 7,
        question: "Which gas do plants absorb during photosynthesis?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "Who wrote the 'I Have a Dream' speech?",
        choices: ["Malcolm X", "Martin Luther King Jr.", "Nelson Mandela", "Barack Obama"],
        correctAnswer: 1
    },
    {
        id: 9,
        question: "What is the value of π (pi) to two decimal places?",
        choices: ["3.14", "3.16", "3.12", "3.18"],
        correctAnswer: 0
    },
    {
        id: 10,
        question: "What is the powerhouse of the cell?",
        choices: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Cell Membrane"],
        correctAnswer: 1
    },
    {
        id: 11,
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        choices: ["Asia", "Europe", "Africa", "Australia"],
        correctAnswer: 0
    },
    {
        id: 12,
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["J.K. Rowling", "Harper Lee", "George Orwell", "Jane Austen"],
        correctAnswer: 1
    },
    {
        id: 13,
        question: "What is the SI unit of force?",
        choices: ["Newton", "Watt", "Joule", "Pascal"],
        correctAnswer: 0
    },
    {
        id: 14,
        question: "Which film won the Academy Award for Best Picture in 1994?",
        choices: ["Forrest Gump", "The Shawshank Redemption", "Pulp Fiction", "Schindler's List"],
        correctAnswer: 3
    },
    {
        id: 15,
        question: "What is the value of 2 to the power of 10?",
        choices: ["512", "1024", "2048", "4096"],
        correctAnswer: 1
    },
    {
        id: 16,
        question: "Who was the first woman to win a Nobel Prize?",
        choices: ["Marie Curie", "Rosalind Franklin", "Florence Nightingale", "Emmy Noether"],
        correctAnswer: 0
    },
    {
        id: 17,
        question: "Which band is often associated with the song 'Bohemian Rhapsody'?",
        choices: ["The Beatles", "Queen", "Led Zeppelin", "The Rolling Stones"],
        correctAnswer: 1
    },
    {
        id: 18,
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: 0
    },
    {
        id: 19,
        question: "Who co-founded Microsoft alongside Bill Gates?",
        choices: ["Steve Jobs", "Paul Allen", "Larry Page", "Mark Zuckerberg"],
        correctAnswer: 1
    },
    {
        id: 20,
        question: "Which country won the FIFA World Cup in 2018?",
        choices: ["Brazil", "Germany", "France", "Argentina"],
        correctAnswer: 2
    },
    {
        id: 21,
        question: "What is the capital city of Japan?",
        choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: 2
    },
    {
        id: 22,
        question: "In which year did the Titanic sink?",
        choices: ["1905", "1912", "1920", "1931"],
        correctAnswer: 1
    },
    {
        id: 23,
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: 1
    },
    {
        id: 24,
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 0
    },
    {
        id: 25,
        question: "What is the capital of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2
    },
    {
        id: 26,
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: 0
    },
    {
        id: 27,
        question: "Who wrote 'Hamlet'?",
        choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        correctAnswer: 2
    },
    {
        id: 28,
        question: "What is the square of 9?",
        choices: ["64", "81", "100", "121"],
        correctAnswer: 1
    },
    {
        id: 29,
        question: "Which gas makes up the majority of Earth's atmosphere?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: 1
    },
    {
        id: 30,
        question: "Who is known as the 'Father of Computer Science'?",
        choices: ["Alan Turing", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
        correctAnswer: 0
    },
    {
        id: 31,
        question: "What is the speed of light in a vacuum?",
        choices: ["300,000 km/s", "500,000 km/s", "700,000 km/s", "900,000 km/s"],
        correctAnswer: 0
    },
    {
        id: 32,
        question: "Who wrote '1984'?",
        choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        correctAnswer: 0
    },
    {
        id: 33,
        question: "What is the chemical symbol for iron?",
        choices: ["Ir", "Fe", "In", "Au"],
        correctAnswer: 1
    },
    {
        id: 34,
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Osmium", "Oganesson", "Olivine"],
        correctAnswer: 0
    },
    {
        id: 35,
        question: "In what year did the first human land on the moon?",
        choices: ["1965", "1969", "1973", "1977"],
        correctAnswer: 1
    },
    {
        id: 36,
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    },
    {
        id: 37,
        question: "Who painted 'Starry Night'?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
        correctAnswer: 0
    },
    {
        id: 38,
        question: "What is the square of 12?",
        choices: ["144", "120", "160", "180"],
        correctAnswer: 0
    },
    {
        id: 39,
        question: "Which gas is known as laughing gas?",
        choices: ["Oxygen", "Nitrous Oxide", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 1
    },
    {
        id: 40,
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
        correctAnswer: 2
    },
    {
        id: 41,
        question: "What is the smallest prime number?",
        choices: ["0", "1", "2", "3"],
        correctAnswer: 2
    },
    {
        id: 42,
        question: "Who discovered penicillin?",
        choices: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Joseph Lister"],
        correctAnswer: 0
    },
    {
        id: 43,
        question: "What is the capital city of Brazil?",
        choices: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        correctAnswer: 1
    },
    {
        id: 44,
        question: "Which famous scientist formulated the laws of motion and gravity?",
        choices: ["Galileo Galilei", "Isaac Newton", "Nikola Tesla", "Albert Einstein"],
        correctAnswer: 1
    },
    {
        id: 45,
        question: "What is the main component of Earth's atmosphere?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: 1
    },
    {
        id: 46,
        question: "Who is the author of 'The Great Gatsby'?",
        choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "Jane Austen", "Charles Dickens"],
        correctAnswer: 0
    },
    {
        id: 47,
        question: "What is the currency of Japan?",
        choices: ["Won", "Yuan", "Yen", "Ringgit"],
        correctAnswer: 2
    },
    {
        id: 48,
        question: "Which planet is known as the 'Morning Star'?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        id: 49,
        question: "What is the largest island in the world?",
        choices: ["Greenland", "Australia", "Borneo", "Madagascar"],
        correctAnswer: 0
    },
    {
        id: 50,
        question: "Who painted the 'Mona Lisa'?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: 0
    }

];