import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../ItemList/ItemList.css";

const Item = ({ data }) => {
  return (
    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="item"
        image={data.img}
      />
      <CardContent>
        <Typography className="cardTitle" gutterBottom variant="h5" component="div">
          {data.nombre}
        </Typography>
        <Typography variant="h5" className="cardPrice" color="text.secondary">
          ${data.precio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Item;
