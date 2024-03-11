import { useState } from "react";
import ItemList from "./ItemList";

const ItemCard = ({item, showList, setShowList, index})=>{
    const [closeList, setCloseList] = useState(showList)
        // showList ? setCloseList(!showList) :'';
    console.log(closeList, "showL", showList)
 function handleClick(){
    setShowList();
    console.log("handle", showList)
    !showList ? setCloseList(showList) :'';
}
    return (
        <div key={item?.title} className='rec'>
            <div className='dfj pd15 cursor-pointer' onClick={handleClick}>
            <span className='name'>{item?.title} ({item?.itemCards.length})</span>
            <span>🔽</span>
            </div>
            <div className="mrItem">
        {item.itemCards.map((item) =>
        closeList || showList &&  <ItemList key={item.card.info.id} card={item}/> )
        }
           </div>
        </div>
    )
}

export default ItemCard;