const myLibrary = [];

const cards = document.querySelector('.cards-container')

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author
    this.pages = pages
    this.read = read
}

const addBookToLibrary = (title, author, pages, read) => {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

addBookToLibrary("myBook", "myAuthor", 1200, true)
addBookToLibrary("myBook", "myAuthor", 1200, true)
addBookToLibrary("myBook", "myAuthor", 1200, true)
addBookToLibrary("myBook", "myAuthor", 1200, true)
addBookToLibrary("myBook", "myAuthor", 1200, true)
addBookToLibrary("myBook", "myAuthor", 1200, true)
addBookToLibrary("myBook", "myAuthor", 1200, true)

const showBooks = () => {
    myLibrary.map(book => {
        let node = document.createElement('h1')
        let textNode = document.createTextNode(book.title)
        node.appendChild(textNode)
        cards.appendChild(node)
    })
}

showBooks()
