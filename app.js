// анимация кнопок
document.getElementById('buttonToHide').addEventListener('click', function () {
    var buttonToHide = this;
    var buttonToShow1 = document.getElementById('buttonToShow1');
    var buttonToShow2 = document.getElementById('buttonToShow2');

    // Начинаем с плавного скрытия кнопки
    buttonToHide.classList.add('hide');
    manualMode.classList.add('hide');

    // Ждем завершения анимации скрытия
    setTimeout(function () {
        buttonToHide.style.display = 'none';

        // Показываем другие кнопки
        buttonToShow1.style.display = 'block';
        buttonToShow2.style.display = 'block';
        hide_manualMode1.style.display = 'block';


        // Плавно увеличиваем их прозрачность
        buttonToShow1.classList.add('show');
        buttonToShow2.classList.add('show');
    }, 300); // время в миллисекундах, равное длительности анимации
});
// анимация кнопок конец

// Ручной режим
let manualMode = document.querySelector('.manual-mode');
let hide_manualMode1 = document.querySelector('#hide_manual-mode1');
let hide_manualMode2 = document.querySelector('#hide_manual-mode2');

hide_manualMode1.style.display = 'none';
hide_manualMode2.style.display = 'none';

manualMode.addEventListener('click', function () {
    manualMode = this;
    hide_manualMode1 = document.querySelector('#hide_manual-mode1');
    hide_manualMode2 = document.querySelector('#hide_manual-mode2');

    manualMode.classList.add('hide');

    setTimeout(function () {
        buttonToHide.style.display = 'none';

        // Показываем другие кнопки
        hide_manualMode1.style.display = 'block';
        hide_manualMode2.style.display = 'block';

        // Плавно увеличиваем их прозрачность
        hide_manualMode1.classList.add('show');
    }, 300);
});
//

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

// Ручной режим

// конец