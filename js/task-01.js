const ul = document.querySelector('#categories');

console.log("Number of categories:", ul.children.length);

const liArr = ul.children;
for ( let li of liArr) {
    const h2 = li.querySelector("h2");
    console.log("Category:", h2.innerHTML);
    const ulElem = li.querySelector("ul");
    console.log("Elements:", ulElem.children.length);
}

