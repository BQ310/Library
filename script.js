const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

function addBooktoLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
};

function clear() {
    const display = document.querySelector("div.display");
    display.innerHTML = '';
}

function propagate() {
    const display = document.querySelector("div.display");
    myLibrary.forEach((e, index) => {
        const card = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const remove = document.createElement("button");
        const read = document.createElement("button");
        
        card.classList.toggle("card");

        if (e.read) {
            read.classList.add("did-read");
            read.classList.remove("not-read");
        } else {
            read.classList.add("not-read");
            read.classList.remove("did-read");
        }

        title.textContent = "Title:" + e.title;
        author.textContent = "Author:" + e.author;
        pages.textContent = "Pages:" + e.pages;
        remove.textContent = "Remove";
        read.textContent = "Read";

        remove.addEventListener('click', (e) => {
            myLibrary.splice(index, 1);
            clear();
            propagate();
        });

        read.onclick = () => {
            e.toggleRead();
            clear();
            propagate();
        };

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(remove);
        card.appendChild(read);
        display.appendChild(card);
    });
}

const submit = document.querySelector("button[type=submit]");

submit.addEventListener('click', (e) => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    addBooktoLibrary(title.value, author.value, pages.value, read.value);
    clear();
    propagate();
});

const add = document.querySelector("button.add");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

add.addEventListener('click', (e) => {
    dialog.showModal();
});
