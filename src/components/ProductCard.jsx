import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { cardStyle, cardMediaStyle } from "../styles/productCard"

function ProductCard({ title, description, price, imgUrl }) {
  return (
    <Card style={cardStyle}>
      <CardMedia
        style={cardMediaStyle}
        component="img"
        image={imgUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
