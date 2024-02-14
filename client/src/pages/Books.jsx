import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8801/books");
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8801/books/${id}`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl underline font-bold">Crud Book Shop</h1>
      <div className="">
        {books.map((book) => (
          <div key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2 className="text-2xl">{book.title}</h2>
            <p>{book.description}</p>
            <span>{book.price}</span>
            <div className="flex gap-2">
              <button className="bg-green-400 px-4 py-2 rounded-sm">
                <Link to={`/update/${book.id}`}>Update</Link>
              </button>
              <button
                className="bg-red-400 px-4 py-2 rounded-sm "
                onClick={() => {
                  handleDelete(book.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <button>
          <Link to="/add">Add new book</Link>
        </button>
      </div>
    </div>
  );
}

export default Books;
