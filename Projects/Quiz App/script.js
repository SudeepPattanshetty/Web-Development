document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const startBtn = document.getElementById('start-btn');
    const resultContainer = document.getElementById('result-container');
    const scoreDisplay = document.getElementById('score');
    const quitBtn = document.getElementById('quit-btn');


    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "Madrid", "Berlin", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Earth", "Venus", "Mars", "Jupiter"],
            answer: "Mars"
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale"
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            choices: ["Gold", "Oxygen", "Silver", "Iron"],
            answer: "Oxygen"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            choices: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
            answer: "William Shakespeare"
        },
        {
            question: "Which country hosted the 2020 Summer Olympics?",
            choices: ["China", "Japan", "Brazil", "USA"],
            answer: "Japan"
        },
        {
            question: "How many continents are there on Earth?",
            choices: ["5", "6", "7", "8"],
            answer: "7"
        },
        {
            question: "What is the boiling point of water at sea level?",
            choices: ["90°C", "100°C", "110°C", "120°C"],
            answer: "100°C"
        },
        {
            question: "Which is the longest river in the world?",
            choices: ["Amazon", "Yangtze", "Mississippi", "Nile"],
            answer: "Nile"
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide"
        }
    ];
    

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz);

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex += 1;

        console.log(currentQuestionIndex)

        if(currentQuestionIndex < questions.length){
            showQuestions()
        }
        else{
            showResult()
        }
    })

    restartBtn.addEventListener('click', () => {
        score = 0;
        currentQuestionIndex = 0;
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        startQuiz()
    })

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestions();
    }

    let answerSelected = false;

    function showQuestions(){
        nextBtn.classList.add("hidden");
        answerSelected = false;
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice
            li.addEventListener('click', () => { 
                if(answerSelected) return;
                answerSelected = true;
                document.querySelectorAll('#choices-list li').forEach(item => {
                    item.classList.remove('selected')
                })
                li.classList.add('selected')
                selectAnswer(choice)
            });
            choicesList.appendChild(li);
        })
    }

    function selectAnswer(choice) {
        const currentAnswer = questions[currentQuestionIndex].answer;
        document.querySelectorAll('#choices-list li').forEach(li => {
            if (li.textContent === currentAnswer) {
                li.classList.add('correct');
            } else if (li.textContent === choice && choice !== currentAnswer) {
                li.classList.add('wrong');
            }
        });
        if(choice === currentAnswer){
            score++;
        }
        nextBtn.classList.remove('hidden');
    }

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }

    quitBtn.addEventListener('click', () => {
        score = 0;
        currentQuestionIndex = 0;

        questionContainer.classList.add('hidden');
        resultContainer.classList.add('hidden');
        startBtn.classList.remove('hidden');
    })
    
})