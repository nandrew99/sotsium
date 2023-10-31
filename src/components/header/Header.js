import "./style.css"
import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
   const activeLink='active_link';
   const normalLink='';
    return ( 
        <header className="header">
               <div className="container">
               <div className="top_menu_row">
                  <div className="burger">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="logo"> 
                     <NavLink to="/"><img src={logo} alt="MENU"/></NavLink>
                  </div>
                  <div className="cart">

                        <NavLink to="/cart1"className={({isActive})=> isActive ? activeLink: normalLink}><img src={cart} alt="cart"/></NavLink>
                  </div>
               </div>


               <div className="menu">
                  <nav>
                     <ul>
                        <li><NavLink to="/tshirt" className={({isActive})=> isActive ? activeLink: normalLink}>T-shirts</NavLink></li>
                        <li><NavLink to="/hoodies"className={({isActive})=> isActive ? activeLink: normalLink}>Hoodies</NavLink></li>
                        <li><NavLink to="/shoppers"className={({isActive})=> isActive ? activeLink: normalLink}>Shoppers</NavLink></li>
                        <li><NavLink to="/other"className={({isActive})=> isActive ? activeLink: normalLink}>Other</NavLink></li>
                     </ul>
                  </nav>
               </div>
               </div>
         </header>
     );
}
 
export default Header;