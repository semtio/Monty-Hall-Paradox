// Функции для добавления/удаления классов и изменения стиля display
function hideElement(element) {
    element.classList.add('hide');
    setTimeout(() => element.style.display = 'none', 300);
}

function showElement(element) {
    element.style.display = 'block';
    element.classList.add('show');
}

// Выборка элементов
let buttonToHide = document.getElementById('buttonToHide');
let buttonsToShow = [document.getElementById('buttonToShow1'), document.getElementById('buttonToShow2'), document.querySelector('#hide_manual-mode1')];
let manualMode = document.querySelector('.manual-mode');
let manualModeButtons = [document.querySelector('#hide_manual-mode1'), document.querySelector('#hide_manual-mode2')];

// Скрытие элементов в начале
manualModeButtons.forEach(hideElement);

// Обработчики событий
buttonToHide.addEventListener('click', function () {
    hideElement(this);
    hideElement(manualMode);
    buttonsToShow.forEach(showElement);
});

manualMode.addEventListener('click', function () {
    hideElement(this);
    hideElement(buttonToHide); // Добавлено скрытие buttonToHide
    manualModeButtons.forEach(showElement);
});

// полная версия

let question = document.querySelector('.question');
let poscenter = document.querySelector('.pos-center');
let rulesOfGame = document.querySelector('.rules-of-game');

question.innerHTML = 'X';
question.addEventListener('click', function () {

    poscenter.classList.toggle('margin-0-500');
    rulesOfGame.classList.toggle('display-none');

    question.innerHTML == '?' ? question.innerHTML = 'X' : question.innerHTML = '?';
});

// полная версия конец