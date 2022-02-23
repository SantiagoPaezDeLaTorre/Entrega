import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { Link } from 'react-router-dom';

const ItemList = ({ items, micategoria}) => {
  return (
    <div className="catalogoContainer">
      {items.map((item) => {
        return(
          <div className="itemCard" key={item.id}>
            <Link to={`/categoria/${micategoria}/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>)
      })}
    </div>
  );
};

export default ItemList;
