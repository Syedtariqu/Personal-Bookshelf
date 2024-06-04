import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Booksearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [cnt, setCnt] = useState(0);
  // Fetch initial set of books
  useEffect(() => {
    const fetchInitialBooks = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/search.json?q=react&limit=10&page=1"
        );
        const data = await response.json();
        setBooks(data.docs);
        setFilteredBooks(data.docs); // Set initial books to filteredBooks to display initially
        setLoading(false); // Update loading state when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Update loading state in case of error
      }
    };
    fetchInitialBooks();
    counter();
  }, []);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (event.target.value.length > 0) {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(books); // Reset to initial books if query is empty
    }
  };
  const addToLocal = (book) => {
    let storedBooks = localStorage.getItem("bookshelf");
    let bookshelf = storedBooks ? JSON.parse(storedBooks) : [];
    bookshelf.push(book);

    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
    counter();

  };

  const counter = () => {
    let storedBooks = localStorage.getItem("bookshelf");
    let bookshelf = storedBooks ? JSON.parse(storedBooks) : [];
    setCnt(bookshelf.length);
  };
  return (
    <div className="book-search">
      <div className="search-bar">
        <div className="input-field">
          <h1>Search by book name:</h1>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for a book..."
          />
        </div>

      </div>

      <div className="search-controls">
          <Link to="/bookshelf">
            <button className="bookshelf-button">
              My Bookshelf <span className="cnt">{cnt >= 1 ? cnt : ""}</span>
            </button>
          </Link>
        </div>
      {loading ? ( // Display loading indicator if loading is true
        <p className="load">Loading...</p>
      ) : (
        <div className="book-results">
          {filteredBooks.map((book, index) => (
            <div key={index} className="book-card">
              <div className="inner">
                <h3>
                  Book Title: <span>{book.title}</span>
                </h3>
                <h4>
                  Edition Count: <span>{book.edition_count}</span>
                </h4>
              </div>
              <button className="add-button" onClick={() => addToLocal(book)}>
                Add to Bookshelf
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booksearch;
