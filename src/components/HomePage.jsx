/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { bookBlock, titleStyle, buttonStyle, bookList } from "../styles/homePage";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { renderCard } from "../store/actions";


const HomePage = ()=> {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cardData = useSelector(state => state.cardData);
 
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [products, setProducts] =useState([]);

   useEffect(() => {
    axios.get('https://booksback.vercel.app/api/books')
    .then((response) => {
      setProducts(response.data);
      dispatch(renderCard(response.data))
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
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
        {cardData.map((product) => (
        <ProductCard
          key={product._id} 
          title={product.title}
          description={`By ${product.author}, ${product.year}`}
          imgUrl={product.imgUrl}
          id={product._id}
        />
      ))}
      </div>
      <Modal isOpen={isModalOpen} closeModal={handleCloseModal} />
    </div>
  );
}

export default HomePage;
