// src/PersonalBookshelf.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PersonalBookshelf() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBooks);
  }, []);
  const clearBookshelf = () => {
    localStorage.removeItem("bookshelf");
    setBookshelf([]);
  };
  return (
    <div className="book-search">
      <div className="search-bar">
        <h1>My Bookshelf</h1>
        <div className="button-group">
          <button onClick={clearBookshelf} className="clear-button">
            Clear Bookshelf
          </button>
          <Link to="/">
            <button className="bookshelf-button">Back to Search</button>
          </Link>
        </div>
      </div>
      <div className="book-results">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <div className="inner">
              <h3>
                Book Title: <span>{book.title}</span>
              </h3>
              <h4>
                Edition Count: <span>{book.edition_count}</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalBookshelf;
