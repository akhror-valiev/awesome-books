
const bookContainer = document.querySelector('.render-container');
const addButton = document.querySelector('form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');


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
            list += `
           <li class="book" id="${book.id}">
             <div class="book-info">
                <p>${book.title}</p>  
                <p>${book.author}</p>
            </div>
            
             <button type="button" class="remove-btn">Remove</button>
             <hr>
           </li>
         `;
        });

        bookContainer.innerHTML = list;



        document.querySelectorAll('.remove-btn').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const bookId = e.target.parentElement.id;
                Books.listOfbooks = Books.listOfbooks.filter((book) => book.id !== bookId);
                Books.storage(Books.listOfbooks);
                e.target.parentElement.remove();
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