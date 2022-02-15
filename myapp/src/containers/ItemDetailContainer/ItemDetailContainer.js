import React, {useState, useEffect} from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import loader from "../../assets/images/spinLoading-unscreen.gif"

const ItemDetailContainer = ({ showDetail, setShowDetail}) => {
  

  const onAddToCart = (counter) => {
    if (counter === 1) {
      alert("Se agregó al carrito " + JSON.stringify(counter) + " producto.");
    } else {
      alert(
        "Se agregaron al carrito " + JSON.stringify(counter) + " productos."
      );
    }
    setCounterRender(false);
  };

  let itemClicked = {};
  const [itemDetails, setItemDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [counterRender, setCounterRender] = useState(true);

  useEffect(() => {
    fetch("../products.json")
      .then((response) => response.json())
      .then((json) => {itemClicked = json.find(item=>item.id === showDetail)})
      .then(() => setItemDetails(itemClicked));

    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);

  }, []);
    
  return (
    <div className="itemDetailContainer">
      <button onClick={() => setCounterRender(false)}>BACK</button>
      {isLoading ? <img src={loader}></img> : <ItemDetail onAddToCart={onAddToCart} itemDetails={itemDetails} counterRender={counterRender} setCounterRender={setCounterRender} />} 
    </div>
  );
};

export default ItemDetailContainer;
