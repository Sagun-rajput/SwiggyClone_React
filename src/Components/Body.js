import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
// import {resDataObj} from "../../Utils/mockData"

const Body =() =>{

let [restDataObj, setrestDataObj] = useState([]);
let [searchText, setsearchText] = useState("");
let [filteredResData, setfilteredResData] = useState([]);
let [vegText, setVegText] = useState("Veg");
useEffect(()=>{fetchData()},[]);

const fetchData = async () => {
    try{
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     
     const jsonData = await data.json();
     console.log(jsonData?.data)
     setrestDataObj(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setfilteredResData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch(err){console.error(err);}
}
if(!useOnlineStatus()){
    return <div>Looks like you are offline! Please check your internet connection.</div>
}
if(restDataObj.length === 0){
    return <h4 className="loader">Loading-----</h4>
}
return(
    <div className="body-container">
        <div className="search">
            <div className="SearchBar">
                <input type="text" className="srch" placeholder="Search Food/Restaurant" value={searchText} onChange={(e)=>setsearchText(e.target.value)}/>
                <button className="btn" onClick={()=>{
                    const filteredData =restDataObj.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredResData(filteredData);
                }}>Search</button>
            </div>
            <div>
            <button type="button" className="button" onClick={()=> setfilteredResData(restDataObj.filter((res)=>res.info.avgRating>4))}>Top Rated Restaurant</button>
            <button type="button" className="button" onClick={
                ()=>{{vegText==="Veg" ? setfilteredResData(restDataObj.filter((res)=>res.info.veg==true)):setfilteredResData(restDataObj.filter((res)=>res.info.veg!=true))}; vegText==="Veg" ? setVegText("Non-Veg") : setVegText("Veg")}
                }>{vegText}</button>
            </div>
        </div>
        <div className='card-header'>
    {filteredResData.map((restaurant)=>
    (
        <Link key= {restaurant.info.id} className="tdn" to={"/restaurant/"+restaurant.info.id}><Card resData = {restaurant}/></Link>))}
        </div>
    </div>)
}

export default Body;