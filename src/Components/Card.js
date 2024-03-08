import {IMG_CDN} from "../../Utils/constants"

const Card =(props)=>{
    const {resData} = props;
    const {name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla, veg} = resData.info;
    return (<div className="card-container">
            <img alt="res Img" height="120px" width="100%" className='res-Image'  src={IMG_CDN+cloudinaryImageId}/>
            <h3 className='mt5 mb10'>{name}</h3>
            <div className='mt5'>{cuisines.join(", ")}</div>
            <div className='mt5'>{costForTwo}</div>
            <div className='mt5'>{avgRating} Stars</div>
            <div className='mt5 df vegN'>{sla.deliveryTime} minutes</div>
            <div className="mt5">{veg ? "Veg": "Non-Veg"} </div>
        </div>
)}

export default Card;