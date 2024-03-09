import { useState } from "react";
import {Svg_Logo} from "../../Utils/constants"

const Header = ()=>{

const [loginText, setLoginText] = useState("Login");
    
return(<div className="header">
        <div className="header-logo">
            {Svg_Logo}
        </div>
        <h2 className="headline">Food Delivery App</h2>
        <div className="nav-header">
            <ul className="navItems">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li><button onClick={()=>loginText==="Login"?setLoginText("Logout"):setLoginText("Login")} className="login" type="button">{loginText}</button></li>
            </ul>
        </div>
    </div>)
}
export default Header;