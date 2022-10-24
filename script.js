const mainStack = document.querySelector('.main');
const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.querySelector('.Add-BTN');

let bookListStack = [
  {
    Title: "Lorem ipsum",
    Author: "Testeroo Tesryy"
  },
  {
    Title: "Lorem ipsum",
    Author: "Testeroo Tesryy"
  },
  {
    Title: "Lorem ipsum",
    Author: "Testeroo Tesryy"
  },
];

let i
bookListStack.forEach((element) => {
    const card = `<ul class="book-list">
    <li class="title">${element.Title}</li>
    <li class="author">${element.Author}</li>
    <li><button onclick="functionX()">Remove</button></li>
    <hr>
</ul>`;
mainStack.insertAdjacentHTML('afterbegin', card);

});

addButton.addEventListener('click', ()=>{
    bookListStack.push({
        Title: "Lorem ipsum",
        Author: "Testeroo Tesryy"
    });
    console.log(bookListStack);
});
