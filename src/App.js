import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import SearchBar from './components/SearchBar';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes');

        const combinedBooks = [...response1.data.items, ...response2.data.items];

        setBooks(combinedBooks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="App">
      <SearchBar setBooks={setBooks} />
      {selectedBook ? (
        <BookDetails book={selectedBook} />
      ) : (
        <BookList books={books} onBookClick={handleBookClick} />
      )}
    </div>
  );
}

export default App;
