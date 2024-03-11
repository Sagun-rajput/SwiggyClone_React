import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu = (resId)=>{
const [restaurantData, setRestaurantData] = useState([]);
const [menuItems, setMenuItems] = useState([]);
useEffect(()=>{fetchData()},[]);

async function fetchData(){
    const MenuData = await fetch(MENU_API+ resId+"&catalog_qa=undefined&submitAction=ENTER")

    const data = await MenuData.json();
    setRestaurantData(data?.data?.cards[0]?.card?.card?.info)
    setMenuItems(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

}
 return [restaurantData,menuItems];
}

export default useRestaurantMenu;