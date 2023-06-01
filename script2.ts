interface Book {
    title: string;
    author: string;
  }
  
  const books: Book[] = [
    { title: "My Talented book", author: "ABC" },
    { title: "My Third Book", author: "XYZ" },
    { title: "First Book", author: "CDE" },
  ];
  
  const searchInput = document.getElementById("searchInput") as HTMLInputElement;
  const resultsDiv = document.getElementById("results");
  
  if (resultsDiv) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
  
      resultsDiv.innerHTML = "";
  
      filteredBooks.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.textContent = `${book.title} - ${book.author}`;
        resultsDiv.appendChild(bookDiv);
      });
    });
  } else {
    console.error("Results div element not found.");
  }
  