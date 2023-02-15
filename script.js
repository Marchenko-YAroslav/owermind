// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {};

// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = 'changeColor';
// Создаем события на тег select.
let wrap = document.querySelector('.body');
let select = document.getElementById('selectColor');
select.addEventListener('change', (event) => {wrap.style.backgroundColor = selectColor.value;});
let color = document.querySelector('option').value;
console.log(color);
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
//option вписан в select