import {Svg_Logo} from "../../Utils/constants"

const Header = ()=>(
    <div className="header">
        <div className="header-logo">
            {Svg_Logo}
        </div>
        <div className="nav-header">
            <ul className="navItems">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header;