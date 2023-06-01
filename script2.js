var books = [
    { title: "My Talented book", author: "ABC" },
    { title: "My Third Book", author: "XYZ" },
    { title: "First Book", author: "CDE" },
];
var searchInput = document.getElementById("searchInput");
var resultsDiv = document.getElementById("results");
if (resultsDiv) {
    searchInput.addEventListener("input", function () {
        var searchTerm = searchInput.value.toLowerCase();
        var filteredBooks = books.filter(function (book) {
            return book.title.toLowerCase().includes(searchTerm);
        });
        resultsDiv.innerHTML = "";
        filteredBooks.forEach(function (book) {
            var bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.textContent = "".concat(book.title, " - ").concat(book.author);
            resultsDiv.appendChild(bookDiv);
        });
    });
}
else {
    console.error("Results div element not found.");
}
