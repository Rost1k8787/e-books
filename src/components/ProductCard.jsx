/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { cardStyle, cardMediaStyle } from "../styles/productCard";
import { currentCard } from '../store/actions';
import DeleteModal from "./deletModal";
import UpdateModal from "./updateModal";


const ProductCard = ({ title, description, imgUrl, id}) =>{

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [ isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const dispatch = useDispatch();

  const handleDeleteOpenModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

   const [selectedCardData, setSelectedCardData] = useState(null);


  const handleUpdateOpenModal = () => {
    setSelectedCardData({ title, description, imgUrl, id });
    setIsUpdateModalOpen(true);
  };

  const handleUpdateCloseModal = () => {
    setIsUpdateModalOpen(false);
  };


  return (
    <Card style={cardStyle}>
      <CardMedia style={cardMediaStyle} component="img" image={imgUrl} alt={title} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> 
        <Button variant="outlined" color="error" onClick={()=>{
          handleUpdateOpenModal()
          dispatch(currentCard(id))
          console.log(currentCard(id))
        }}>
          Change
        </Button>
        <Button variant="outlined" color="error" onClick={()=>{
          handleDeleteOpenModal()
          dispatch(currentCard(id))
        }}>
          Delete
        </Button>
      </CardContent>
      <UpdateModal isOpen={ isUpdateModalOpen} closeModal={handleUpdateCloseModal} />
      <DeleteModal isOpen={isDeleteModalOpen} closeModal={handleDeleteCloseModal} />
    </Card>
  );
}

export default ProductCard;

