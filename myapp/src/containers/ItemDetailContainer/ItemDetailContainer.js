import React, {useState, useEffect, useContext} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import loader from "../../assets/images/spinLoading-unscreen.gif"
import {useParams} from 'react-router-dom';
import { CartContext } from "../../components/CartContext";
import {db} from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';


const ItemDetailContainer = () => {
  
  let {id} = useParams();
  let {micategoria} = useParams();
  console.log("id",id,"...micategoria",micategoria);

  let itemClicked = {};
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [counterRender, setCounterRender] = useState(true);
  const {addItemsToCart, cart} =  useContext(CartContext);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('/products.json');
  //       const results = await response.json();
  //       itemClicked = results.find(item => item.id.toString() === id);
  //       setItemDetails(itemClicked);
  //     }
  //     catch(e) {
  //       console.error(e);
  //     }
  //   }
  //   fetchData();
        
  //   setTimeout(()=>{
  //     setIsLoading(false);
  //   }, 2000);

  // }, []);

  useEffect(() => {
    const docs = [];
    const getItem = async () => {
      const q = query(collection(db,`${micategoria}`), where(documentId(),'==', id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
      console.log("list", docs);
      });
      setItem(docs);
      console.log("itemDetails", item);
    }
    getItem();
    

    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);

  }, [id]);

  const onAddToCart = (counter) => {
    if (counter === 1) {
      //alert("Se agregó al carrito " + JSON.stringify(counter) + " producto.");
    } else {
      alert(
        "Se agregaron al carrito " + JSON.stringify(counter) + " productos."
      );
    }
    addItemsToCart(item, counter)
    setCounterRender(false);
  };

  console.log("cart", cart);
  
  return (
    <div className="itemDetailContainer">
      {isLoading ? <img src={loader}></img> : <ItemDetail onAddToCart={onAddToCart} item={item}  counterRender={counterRender} setCounterRender={setCounterRender} />} 
    </div>
  );
};

export default ItemDetailContainer;
