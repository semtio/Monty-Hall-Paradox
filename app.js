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