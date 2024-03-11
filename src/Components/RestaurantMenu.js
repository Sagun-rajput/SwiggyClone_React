import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../Utils/useRestaurantMenu';
import ItemCard from './ItemCard';
import { useState } from 'react';

const RestaurantMenu =()=>{
const {resId} = useParams();
const [showList, setShowList] = useState(null);
const resD = useRestaurantMenu(resId)
const restaurantData = resD[0];
const menuItems = resD[1];
const FilteredMenuItems = menuItems.filter(menuItem => menuItem?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

if(restaurantData.length==0){
    return <h4 className="loader">Loading-----</h4>
}
const {name, cuisines, id, areaName,totalRatingsString, avgRating} = restaurantData;
    return (
    <div className="restaurant-menu">
        <div className="top-section dfj">
        <div>
            <div className='name'>{name}</div>
            <div className='loc'>{areaName}</div>
            <p className='cus'>{cuisines.join(", ")}</p>
        </div>
        <div>
            <div>{avgRating}</div>
            <div>{totalRatingsString}</div>
        </div>
        </div>

    {FilteredMenuItems.map((item, index)=>
        <ItemCard key={index} item ={item.card.card} showList={index === showList? true: false} setShowList={()=>setShowList(index)} index={index}/>
    )}
        </div>
    )
}

export default RestaurantMenu