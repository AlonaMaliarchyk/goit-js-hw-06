function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const divBoxes = document.querySelector("#boxes");
const input = document.querySelector('#controls input');
 

function rendomRGB() {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red}, ${green}, ${blue})`;
 }
function createBoxes(amount) {
  let size = 30;
  amount = Number(input.value);
  console.log(amount);
  console.log(typeof amount);
  const boxArr = [];
  for (let i = 1; i <= amount; i += 1){
    let growingSize = size + i * 10;
    let boxElement = `<div style=" height:${growingSize}px; width:${growingSize}px; background-color:${rendomRGB()}; margin: 5px;"></div>`;
    boxArr.push(boxElement);
    console.log(size);
    console.log(boxArr);
  }
  divBoxes.insertAdjacentHTML('beforebegin', boxArr.join(""));
}

function destroyBoxes() {
  input.value = "";
  divBoxes.innerHTML = "";
}
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
//-------------------------------------------------------
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBtn = document.querySelector('#controls button[data-create]');
// const destroyBtn = document.querySelector('#controls button[data-destroy]');

// createBtn.addEventListener('click', () => {
//   const input = document.querySelector('#controls input');
//   createBoxes(input.value);
// })

// destroyBtn.addEventListener('click', () => {
//   destroyBoxes();
// })

// function createBoxes(amount) {
//   let height = 30;
//   let width = 30;
  
//   const divBoxes = document.querySelector("#boxes");
//   for (let i = 1; i <= amount; i += 1){
//     const element = document.createElement("div");
//     element.style.width = width + 'px';
//     element.style.height = height + 'px';
//     element.style.backgroundColor = getRandomHexColor();
//     element.style.marginBottom = '10px';
//     divBoxes.appendChild(element);
//     height += 10;
//     width += 10;
//   }
// }

// function destroyBoxes() {
//   const divBoxes = document.querySelector("#boxes");

//   while (divBoxes.children.length > 0) { 
//     divBoxes.firstChild.remove();
//   }
// }

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