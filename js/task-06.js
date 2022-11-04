const input = document.querySelector('#validation-input');
console.log(input.attributes['data-length'].value);
input.addEventListener("blur", () => {
    console.log(input);
    if (input.value.length === 6) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
  })



// Напиши скрипт, який під час втрати фокусу на інпуті
//     (подія blur), перевіряє його вї
//      кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Яка кількість смиволів повинна бути в інпуті, зазначається 
// в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту 
// стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//     які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;