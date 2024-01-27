import React from 'react';

function BookDetails({ book }) {
  return (
    <div className="book-details">
      <img src={book.volumeInfo.imageLinks.large} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
    </div>
  );
}

export default BookDetails;
