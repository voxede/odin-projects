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
addBookToLibrary("myBook", "myAuthor", 1200, false)
addBookToLibrary("myBook", "myAuthor", 1200, true)
addBookToLibrary("myBook", "myAuthor", 1200, false)
addBookToLibrary("myBook", "myAuthor", 1200, true)
addBookToLibrary("myBook", "myAuthor", 1200, true)

const showBooks = () => {
    myLibrary.map(book => {
        let card = document.createElement('div')
        let cardTitle = document.createElement('h1')
        let cardAuthor = document.createElement('h4')
        let cardPages = document.createElement('p')
        let cardRead = document.createElement('p')

        let bookTitle = document.createTextNode(book.title)
        let bookAuthor = document.createTextNode(`Author: ${book.author}`)
        let bookPages = document.createTextNode(`Pages: ${book.pages}`)
        let bookRead = book.read ? document.createTextNode('Read: Yes') : document.createTextNode('Read: Not')

        card.classList.add('card')

        cardTitle.appendChild(bookTitle)
        cardAuthor.append(bookAuthor)
        cardPages.append(bookPages)
        cardRead.append(bookRead)

        card.appendChild(cardTitle)
        card.appendChild(cardAuthor)
        card.append(cardPages)
        card.append(cardRead)

        cards.appendChild(card)
    })
}

showBooks()
