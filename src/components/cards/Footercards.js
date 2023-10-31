import NavBtn from "../navbtn/NavBtn";
import "./style.css";
import { allItems } from "../helpers/ItemList";
import { NavLink } from "react-router-dom";
const FooterCards = () => {
    return ( 
        <>
        <div className="shoping_cards_row last_items">
        {allItems.map((allItems, index)=>{
                        return (
                            allItems.topitem&&(
                        <div className="shop_card" key={index}>
                              <NavLink to={`/item/${index}`} className="shoping_card_a">
                              <div className="shoping_card_img flex_img_cover">
                              <img src={allItems.img1} alt="/#"/>
                              </div>
                              <div className="shoping_card_info">
                              <div className="shoping_card_price">{allItems.price}</div>
                              <div className="shoping_card_des">{allItems.stock}</div>
                              </div>
                              </NavLink>
                        </div>
                            )
                        );
                    })}
            </div>
            <NavBtn/>
        </>
     );
}
 
export default FooterCards;