let questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Who is the current president of the USA?',
        options: ['Barack Obama', 'Donald Trump', 'Joe Biden', 'Hillary Clinton'],
        correctAnswer: 'Joe Biden'
    },
    {
        question: 'What is the process by which plants make their own food called?',
        options: ["Cellular Respiration", 'Digestion', 'Photosynthesis', 'Osmosis'],
        correctAnswer: 'Photosynthesis'
    },
    {
        question: 'What is the smallest unit of life in all living organisms called?',
        options: ['Cell', 'Molecule', 'Organ', 'Tissue'],
        correctAnswer: 'Cell'
    },
    {
        question: 'What is te force that pulls objects towards each other called?',
        options: ['Friction', 'Magnetic Force', 'Electric Force', 'Gravity'],
        correctAnswer: 'Gravity'
    },
    {
        question: 'What are the building blocks of protein?',
        options: ['Nucleotides', 'Amino Acids', 'Fatty acids', 'Glucose'],
        correctAnswer: 'Amino Acids'
    },
    {
        question: 'What are the four largest planets in our solar system?',
        options: ['Earth, Mars, Venus, Mercury', 'Mars, Jupiter, Saturn, Venus', 'Mercury, Venus, Earth, Mars', 'Jupiter, Saturn, Uranus, Neptune'],
        correctAnswer: 'Jupiter, Saturn, Uranus, Neptune'
    },
    /*can add more questions following structure*/
];

let currentQuestion = 0;

function loadQuestion() {
    let questionContainer = document.getElementById('question');
    let optionContainer = document.getElementById('option-container');

    questionContainer.textContent = questions[currentQuestion].question;
    optionContainer.innerHTML = '';

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        let option = document.createElement('div');
        option.className = 'option';
        option.textContent = questions[currentQuestion].options[i];
        option.addEventListener('click', function () {
            if (option.textContent === questions[currentQuestion].correctAnswer) {
                option.style.backgroundColor = 'lightgreen';
            } else {
                option.style.backgroundColor = 'salmon';
            }
        });
        optionContainer.appendChild(option);
    }
}

function loadNextQuestion() {
    currentQuestion++;
    if(currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert('Quiz Finished!');
    }
}