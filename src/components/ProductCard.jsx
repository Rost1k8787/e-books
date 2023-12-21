import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { cardStyle, cardMediaStyle } from "../styles/productCard";
import { currentCard } from '../store/actions';
import DeleteModal from "./deletModal";

function ProductCard({ title, description, imgUrl, _id}) {
  console.log(_id, 222);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteOpenModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setIsDeleteModalOpen(false);
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
          handleDeleteOpenModal()
          dispatch(currentCard(_id))
          console.log(_id, 111)
        }}>
          Delete
        </Button>
      </CardContent>
      <DeleteModal isOpen={isDeleteModalOpen} closeModal={handleDeleteCloseModal} />
    </Card>
  );
}

export default ProductCard;

