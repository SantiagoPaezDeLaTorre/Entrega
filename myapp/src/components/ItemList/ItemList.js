import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ categoryClicked, setShowDetail }) => {
  return (
    <div className="catalogoContainer">
      {categoryClicked.map((item) => {
        return (
          <div className="itemCard" onClick={() =>setShowDetail(item.id)} key={item.id}>
            <Item data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
