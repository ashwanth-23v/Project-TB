const questions = [
    {
        question: "Do you often criticize your partner?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you frequently check your partner's phone?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you use guilt to manipulate your partner?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you feel insecure in your relationship?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you ignore your partner's feelings?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you often belittle your partner in front of others?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you try to control who your partner can be friends with?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you often bring up past mistakes to make your partner feel bad?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you often feel jealous when your partner spends time with others?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
        question: "Do you frequently dismiss your partner's opinions or feelings?",
        options: ["Always", "Sometimes", "Rarely", "Never"],
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('startButton').onclick = function() {
    document.getElementById('welcomeContainer').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    displayQuestion();
};

function displayQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        optionsContainer.innerHTML += `
            <label>
                <input type="radio" name="option" value="${option}" onclick="handleAnswer('${option}')"> ${option}
            </label><br>
        `;
    });
}

function handleAnswer(answer) {
    // Scoring system
    if (answer === "Always") {
        score += 2; // 2 points for toxic behavior
    } else if (answer === "Sometimes") {
        score += 1; // 1 point for occasional toxic behavior
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.remove('hidden');

    let resultMessage;
    if (score >= 16) {
        resultMessage = "You are toxic AF go find someone toxic too👌.";
    } else if (score >= 8) {
        resultMessage = "You have some occasional toxic behaviors. Try to work on them.";
    } else {
        resultMessage = "YOU ARE A POOKIE";
    }

    document.getElementById('results').innerText = resultMessage;
}

document.getElementById('restartButton').onclick = function() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('welcomeContainer').classList.remove('hidden');
};
