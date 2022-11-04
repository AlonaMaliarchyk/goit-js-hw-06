

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");
console.log(list);
const markup = images
  .map((img) => `<li class="imge_gallery" style='display: flex;'><img width=300 src="${img.url}" src="${img.alt}" /></li>`)
  .join("");
list.classList.add("link_gallery");
list.style.backgroundColor = "grey";
list.style.padding = "20px";
list.style.flexBasis = "700px";
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.columnGap = "15px";
list.style.rowGap = "15px";
list.style.justifyContent = "space-evenly";

list.insertAdjacentHTML("beforeend", markup);

// list.insertAdjacentHTML("beforebegin", "<h2>Gallery</h2>");



// Напиши скрипт для створення галереї зображень на підставі
//  масиву даних.HTML містить список ul.gallery.

// <ul class="gallery"></ul>

//   Використовуй масив об'єктів images для створення елементів
//   < img >, вкладених в < li >.Для створення розмітки
//      використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію
// додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами 
// через CSS класи.