import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const [book, setBook] = useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const bookId = pathname.split("/")[pathname.split("/").length - 1];

  console.log(pathname.split("/")[pathname.split("/").length - 1]);

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8801/books/" + bookId, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(book);

  return (
    <div className="bg-green-400 h-screen flex items-center justify-center">
      <div className="bg-indigo-400 w-1/4 p-2 rounded-sm">
        <h1>Update the Book</h1>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="cover"
            name="cover"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="price"
            name="price"
            onChange={handleChange}
          />
          <button onClick={handleClick}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default Update;
