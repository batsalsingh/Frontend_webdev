// ES6 Book class
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return true;
        }
        return false;
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            return true;
        }
        return false;
    }
}

// Array of books
const library = [
    new Book("The Alchemist", "Paulo Coelho", "101", false),
    new Book("Atomic Habits", "James Clear", "102", false),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "103", true),
    new Book("Think & Grow Rich", "Napoleon Hill", "104", false)
];

const booksList = document.getElementById("booksList");
const msg = document.getElementById("msg");

// Show all available books
const showAvailableBooks = () => {
    booksList.innerHTML = "";

    const available = library.filter(book => !book.isIssued);

    if (available.length === 0) {
        booksList.innerHTML = "<p>No books available.</p>";
        return;
    }

    available.forEach(book => {
        booksList.innerHTML += `
            <p><strong>${book.title}</strong> by ${book.author}
            (ISBN: ${book.isbn})</p>
        `;
    });
};

// Initial display
showAvailableBooks();

// Issue book
document.getElementById("issueBtn").addEventListener("click", () => {
    const isbn = document.getElementById("isbnIssue").value;
    const book = library.find(b => b.isbn === isbn);

    if (!book) {
        msg.textContent = "Book not found!";
        msg.className = "msg error";
        return;
    }

    if (book.issueBook()) {
        msg.textContent = "Book issued successfully!";
        msg.className = "msg success";
    } else {
        msg.textContent = "Book is already issued!";
        msg.className = "msg error";
    }

    showAvailableBooks();
});

// Return book
document.getElementById("returnBtn").addEventListener("click", () => {
    const isbn = document.getElementById("isbnReturn").value;
    const book = library.find(b => b.isbn === isbn);

    if (!book) {
        msg.textContent = "Book not found!";
        msg.className = "msg error";
        return;
    }

    if (book.returnBook()) {
        msg.textContent = "Book returned successfully!";
        msg.className = "msg success";
    } else {
        msg.textContent = "This book was not issued!";
        msg.className = "msg error";
    }

    showAvailableBooks();
});
