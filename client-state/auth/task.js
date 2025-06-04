const form = document.getElementById('signin__form');
const btn = document.getElementById('signin__btn');
const signinDiv = document.getElementById('signin');
const welcomeDiv = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

function showWelcome(userId) {
    userIdSpan.textContent = userId;
    welcomeDiv.classList.add('welcome_active');
    signinDiv.classList.remove('signin_active');
}

function showForm() {
    welcomeDiv.classList.remove('welcome_active');
    signinDiv.classList.add('signin_active');
}

const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
        showWelcome(storedUserId);
    } else {
        showForm();
    }

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const login = form.elements['login'].value;
    const password = form.elements['password'].value;
    const data = { login, password };

    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            localStorage.setItem('user_id', result.user_id);
            showWelcome(result.user_id);
        } else {
            alert('Неверный логин/пароль');
        }
    })
    .catch(() => {
        alert('Ошибка при соединении с сервером');
    });
});