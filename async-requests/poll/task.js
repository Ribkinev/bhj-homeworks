const pollTitle = document.getElementById('poll__title');
const pollAnswersContainer = document.getElementById('poll__answers');

const loadButton = document.createElement('button');
loadButton.id = 'load-new-poll';
loadButton.textContent = 'Загрузить новый опрос';
loadButton.style.marginTop = '20px';

const cardContainer = document.querySelector('.card');
cardContainer.appendChild(loadButton);

let currentPollId = null;
let currentAnswers = [];

function loadPoll() {
    fetch('https://students.netoservices.ru/nestjs-backend/poll')
        .then(response => response.json())
        .then(data => {
            currentPollId = data.id;
            currentAnswers = data.data.answers;

            pollTitle.textContent = data.data.title;

            pollAnswersContainer.innerHTML = '';

            data.data.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.className = 'poll__answer';
                button.textContent = answer;
                button.dataset.answerIndex = index; 
                pollAnswersContainer.appendChild(button);
            });
        })
    .catch(error => {
        console.error('Ошибка при загрузке опроса:', error);
    });
}

pollAnswersContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('poll__answer')) {
        const answerIndex = event.target.dataset.answerIndex;
        alert('Спасибо, ваш голос засчитан!');

        const params = new URLSearchParams();
        params.append('vote', currentPollId);
        params.append('answer', answerIndex);

        fetch('https://students.netoservices.ru/nestjs-backend/poll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        })
        .then(response => response.json())
        .then(data => {
            showResults(data.stat);
        })
        .catch(error => {
            console.error('Ошибка при отправке голоса:', error);
        });
    }
});

loadButton.addEventListener('click', () => {
    loadPoll();
});

function showResults(results) {
    pollAnswersContainer.innerHTML = '';
    results.forEach((result) => {
        const answerText = result.answer;
        const votesCount = result.votes;
        const resultDiv = document.createElement('div');
        resultDiv.className = 'poll__result';
        resultDiv.innerHTML = `
            <strong>${answerText}:</strong> ${votesCount} голосов
        `;
        pollAnswersContainer.appendChild(resultDiv);
    });
}

loadPoll();