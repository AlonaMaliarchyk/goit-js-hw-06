function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');

createBtn.addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  createBoxes(input.value);
})

destroyBtn.addEventListener('click', () => {
  let divBoxes = document.querySelector("#boxes");

  while (divBoxes.children.length > 0) { 
    divBoxes.firstChild.remove();
  }
})

function createBoxes(amount) {
  let height = 30;
  let width = 30;
  
  const divBoxes = document.querySelector("#boxes");
  for (let i = 1; i <= amount; i += 1){
    const element = document.createElement("div");
    element.style.width = width + 'px';
    element.style.height = height + 'px';
    element.style.backgroundColor = getRandomHexColor();
    element.style.marginBottom = '10px';
    divBoxes.appendChild(element);
    height += 10;
    width += 10;
  }
}

// Завдання 10(виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку 
// Створити, після чого рендериться колекція.Натисненням на кнопку Очистити,
//   колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр -
// число.Функція створює стільки < div >, скільки вказано в amount і 
// додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від 
// попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий 
// спосіб видаляючи всі створені елементи.