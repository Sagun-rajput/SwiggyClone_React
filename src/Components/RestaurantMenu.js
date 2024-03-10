import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../Utils/useRestaurantMenu';

const RestaurantMenu =()=>{
const {resId} = useParams();
console.log(resId)
const resD = useRestaurantMenu(resId)
const restaurantData = resD[0];
const menuItems = resD[1];
console.log("sssss",restaurantData , "me", menuItems)
if(restaurantData.length==0){
    return <h4 className="loader">Loading-----</h4>
}
const {name, cuisines, id, areaName,totalRatingsString, avgRating} = restaurantData;
    return (
    <div className="restaurant-menu">
        <div className="top-section df">
        <div>
            <div>{name}</div>
            <div>{areaName}</div>
            <p>{cuisines.join(", ")}</p>
        </div>
        <div>
            <div>{avgRating}</div>
            <div>{totalRatingsString}</div>
        </div>
        </div>
        <ul>Menu-items:
            {menuItems && menuItems.map((menuItem) =>(<li key={menuItem?.card?.info?.id}>
                <div>{menuItem?.card?.info?.name} - {menuItem?.card?.info?.price/100}</div>
            </li>
            ))}

        </ul>
        
        </div>
    )
}

export default RestaurantMenu