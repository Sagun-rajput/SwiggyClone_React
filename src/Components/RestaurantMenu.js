import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { MENU_API } from "../../Utils/constants";

const RestaurantMenu =()=>{
const {resId} = useParams();
console.log(resId)
const [restaurantData, setRestaurantData] = useState([]);
const [menuItems, setMenuItems] = useState([]);
useEffect(()=>{fetchData()},[]);

async function fetchData(){
    const MenuData = await fetch(MENU_API+ resId+"&catalog_qa=undefined&submitAction=ENTER")

    const data = await MenuData.json();
    setRestaurantData(data?.data?.cards[0]?.card?.card?.info)
    setMenuItems(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
}
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
            {menuItems.map((menuItem) =>(<li key={menuItem?.card?.info?.id}>
                <div>{menuItem?.card?.info?.name} - {menuItem?.card?.info?.price/100}</div>
            </li>
            ))}

        </ul>
        
        </div>
    )
}

export default RestaurantMenu