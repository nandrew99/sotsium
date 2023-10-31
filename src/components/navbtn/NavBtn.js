import back from "../../img/back1.svg";
import next from "../../img/next.svg";
const NavBtn = () => {
    return ( 
        <div className="nav_shop_block">
               <a href="/#" className="nav_shop_a">
                  <div className="nav_icon"><img src={back} alt="#" className="nav_icon_img"/></div>
               </a>
               <a href="/#" className="nav_shop_a">
                  <div className="nav_icon"><img src={next} alt="#" className="nav_icon_img"/></div>
               </a>
            </div>
     );
}
 
export default NavBtn;