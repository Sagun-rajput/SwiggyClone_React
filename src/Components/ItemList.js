import { IMG_CDN } from "../../Utils/constants";

const ItemList = ({card}) => {
return(
    <div className="item dfj aic">
    <div className="menuIt">
        <div className="itemName fw">{card?.card?.info?.name}</div>
        <div className="itemName fw fs14">{card.card.info.price ? card.card.info.price/100 : card.card.info.defaultPrice/100 }</div>
        <div className="itemName fs13">{card.card?.info?.description}</div>
     </div>
    <img className="imgItem" src={IMG_CDN+card?.card?.info?.imageId} width="100px" height="100px"/>
    </div>         

)


}

export default ItemList;