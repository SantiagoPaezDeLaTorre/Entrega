import React, { useState, useEffect } from 'react';
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from 'firebase/firestore';


const ItemListContainer = () => {
  const { micategoria } = useParams();
  const [items, setItems] = useState([]);
  //let categoryClicked = [];

  useEffect(() => {
    const docs = [];
    const getItems = async () => {
      const q = query(collection(db,`${micategoria}`));
      console.log("q", q);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      console.log("list", docs);
      });
      setItems(docs);
    }
    getItems();

  }, [micategoria]);

  return (
    <div className="itemListContainer">
      <h1>Alimentos</h1>
      <div>
        <ItemList micategoria={micategoria} items={items} />
      </div>
    </div>

  );
};

export default ItemListContainer;
