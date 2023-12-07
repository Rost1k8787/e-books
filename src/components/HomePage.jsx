import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { bookBlock, titleStyle, buttonStyle, bookList } from "../styles/homePage";
import Modal from "./Modal";
import ProductCard from "./ProductCard";


function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [products, setProducts] =useState([]);

   useEffect(() => {
    fetch("https://booksback.vercel.app/api/books")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="book-block" style={bookBlock}>
      <h1 style={titleStyle}>
        E-books
      </h1>
      <div className="btn-block">
        <Button onClick={handleOpenModal} style={buttonStyle}>
          Add Book
        </Button>
      </div>
      <div style={bookList}>
        {products.map((product) => (
        <ProductCard
          key={product._id} 
          title={product.title}
          description={`By ${product.author}, ${product.year}`}
          imgUrl={product.imgUrl}
        />
      ))}
      </div>
      <Modal isOpen={isModalOpen} closeModal={handleCloseModal} />
    </div>
  );
}

export default HomePage;
