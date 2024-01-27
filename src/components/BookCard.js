import React from 'react';

function BookCard({ book, onClick }) {
  return (
    <div className="book-card" onClick={onClick}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
    </div>
  );
}

export default BookCard;
