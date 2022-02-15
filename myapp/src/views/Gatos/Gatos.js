import React from 'react';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer';

const Gatos = ({showDetail, setShowDetail}) => {
    console.log("showDetail");
    console.log(showDetail);
    
    return(
    <div className="contenedor">
        {showDetail !== "" ? 
            (<ItemDetailContainer
            showDetail={showDetail}
            setShowDetail={setShowDetail}
            />)
            :
            (<ItemListContainer 
            setShowDetail={setShowDetail}
            categoryId="2"
            />)
        }
    </div>

    ) 
}
export default Gatos;