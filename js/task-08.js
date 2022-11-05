
const form = document.querySelector(".login-form");

console.log(form);
function handleSubmit(event) {
    event.preventDefault();
    // const {
    //     elements: { email, password }
    // } = event.currentTarget;

    const formValue = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value
    }

    if (formValue.email === "" || formValue.password === "") {
        alert("Please fill in all the fields!");
    } else { 
        console.log(`Login: ${formValue.email}, Password: ${formValue.password}`);
        event.currentTarget.reset();      
    }
}
form.addEventListener("submit", handleSubmit);

// Завдання 8
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

//     Обробка відправлення форми form.login - form повинна відбуватися 
// відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про
// те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення 
// полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля
//     - значенням властивості.Для доступу до елементів форми
//      використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти 
// значення полів форми методом reset.
