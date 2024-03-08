import { useState } from "react";
import Card from "./Card";
import {resDataObj} from "../../Utils/mockData"

const Body =() =>{

let [restDataObj, setrestDataObj] = useState(resDataObj);

return(
    <div className="body-container">
        <div className="search">
            <button type="button" className="button" onClick={()=> setrestDataObj(restDataObj.filter((res)=>res.info.avgRating>4))}>Top Rated Restaurant</button>
            <button type="button" className="button" onClick={()=>{setrestDataObj(restDataObj.filter((res)=>res.info.veg==true))}}>Veg Only</button>
        </div>
        <div className='card-header'>
    {restDataObj.map((restaurant)=>(
        <Card key= {restaurant.info.id} resData = {restaurant}/>))}
        </div>
    </div>)
}

export default Body;