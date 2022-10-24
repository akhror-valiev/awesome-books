const mainStack = document.querySelector('.main');
const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.querySelector('.Add-BTN');
let StoredData;
let counter = -1;
let bookListStack = [];

addButton.addEventListener('click',
   () => {
     bookListStack.unshift({
        Title: title.value,
        Author: author.value
    });
       localStorage.setItem("BooksLocalStorage" ,JSON.stringify(bookListStack));
       setInterval(function(){
        location.reload()}, 100);
   }
);
  StoredData = JSON.parse(localStorage.getItem("BooksLocalStorage"));
  bookListStack = StoredData;

bookListStack.forEach((element) => {
    counter++;
    const card = `<ul class="book-list">
    <li class="title">${element.Title}</li>
    <li class="author">${element.Author}</li>
    <li><button onClick="RemoveBook(${counter})">Remove</button></li>
    <hr>
</ul>`;
mainStack.insertAdjacentHTML('afterbegin', card);

});

function RemoveBook(index){
    bookListStack.splice(index, 1);
    localStorage.setItem("BooksLocalStorage", JSON.stringify(bookListStack));
    console.log(index);
    setInterval(function(){
    location.reload()}, 100);
}