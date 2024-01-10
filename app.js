// анимация кнопок
document.getElementById('buttonToHide').addEventListener('click', function () {
    var buttonToHide = this;
    var buttonToShow1 = document.getElementById('buttonToShow1');
    var buttonToShow2 = document.getElementById('buttonToShow2');

    // Начинаем с плавного скрытия кнопки
    buttonToHide.classList.add('hide');

    // Ждем завершения анимации скрытия
    setTimeout(function () {
        buttonToHide.style.display = 'none';

        // Показываем другие кнопки
        buttonToShow1.style.display = 'block';
        buttonToShow2.style.display = 'block';

        // Плавно увеличиваем их прозрачность
        buttonToShow1.classList.add('show');
        buttonToShow2.classList.add('show');
    }, 1000); // время в миллисекундах, равное длительности анимации
});
// анимация кнопок конец

// полная версия

let question = document.querySelector('.question');
let poscenter = document.querySelector('.pos-center');
let rulesOfGame = document.querySelector('.rules-of-game');

question.addEventListener('click', function () {
    poscenter.classList.toggle('margin-0-500');
    rulesOfGame.classList.toggle('display-none');
    // rulesOfGame.style.display = 'block';
});

// полная версия конец