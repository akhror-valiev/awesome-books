
const bookContainer = document.querySelector('.render-container');
const addButton = document.querySelector('form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const ListClick = document.getElementById('my-main');
const FormClick = document.getElementById('my-form');
const ContactClick = document.getElementById('my-contact');

let counter = 0;

class Books {
    static listOfbooks = [];

    id = `${Date.now()}`.slice(-10);

    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    // Data Storage
    static storage(listOfbooks) {
        localStorage.setItem('listOfbooks', JSON.stringify(listOfbooks));
    }

    addItem() {
        Books.listOfbooks.push(this);
        Books.storage(Books.listOfbooks);
        Books.renderBook();
        titleInput.value = '';
        authorInput.value = '';
    }

    // Display Book
    static renderBook() {
        if (JSON.parse(localStorage.getItem('listOfbooks'))) {
            Books.listOfbooks = JSON.parse(localStorage.getItem('listOfbooks'));
        }




        let list = ''
        Books.listOfbooks.forEach((book) => {
          counter++;
         if(counter%2 === 0){
            list += `
           <li class="book-even" id="${book.id}">
             <div class="book-info">
                <p>"${book.title}"</p>
                <p>by</p>  
                <p>${book.author}</p>
            </div>
            <button type="button" class="remove-btn">Remove</button>
           </li>
         `;
         }
         else{
            list += `
           <li class="book-odd" id="${book.id}">
             <div class="book-info">
                <p>"${book.title}"</p>
                <p>by</p>  
                <p>${book.author}</p>
            </div>
            <button type="button" class="remove-btn">Remove</button>
           </li>
         `;
         console.log(counter);
         }
        });

        bookContainer.innerHTML = list;



        document.querySelectorAll('.remove-btn').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const bookId = e.target.parentElement.id;
                Books.listOfbooks = Books.listOfbooks.filter((book) => book.id !== bookId);
                Books.storage(Books.listOfbooks);
                e.target.parentElement.remove();
                location.reload();
            });
        });
    }
}


let id;

addButton.addEventListener('submit', (e) => {
    e.preventDefault();
    const errorMsg = document.getElementById('errorMsg');
    id = `${Date.now()}`.slice(-10);
    const title = titleInput.value;
    const author = authorInput.value;

    if (title.length < 1 && author.length < 1) {
        errorMsg.innerHTML = 'Please fill the input';
    } else {
        const newItem = new Books(id, title, author);
        newItem.addItem();
        location.reload();
    }

});


window.onload = () => {
    Books.renderBook();
};

  function NavClick(input){
    if(input === 'list'){
       ListClick.className = 'main';
       FormClick.className = 'form-none';
       ContactClick.className = 'contact-section-none';
       document.getElementById('nav-link').style.color = 'blue';
       document.querySelector('.add-new').style.color = 'black';
       document.getElementById('contact').style.color = 'black';
    }
    else if(input === 'add-new'){
        ListClick.className = 'main-list';
        FormClick.className = 'form';
        ContactClick.className = 'contact-section-none';
        document.getElementById('nav-link').style.color = 'black';
        document.querySelector('.add-new').style.color = 'blue';
        document.getElementById('contact').style.color = 'black';
    }
    else{
        ListClick.className = 'main-list';
        FormClick.className = 'form-none';
        ContactClick.className = 'contact-section';
        document.getElementById('nav-link').style.color = 'black';
        document.querySelector('.add-new').style.color = 'black';
        document.getElementById('contact').style.color = 'blue';
    }
  }
